import React, {Component, PropTypes} from 'react';
import {connect as connectToState} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {loadFinanceAction, saveFinanceAction} from '../../actions/finance-actions';
//import {selectData} from 'focus-graph/store/create-store'
import Panel from 'focus-graph/components/panel';
import compose from 'lodash/flowRight';
import FinancialMoveLine from './financialMoveLine'

const User = ({fieldFor,listFor, rawInputValue, victoire, echec,  ...otherProps}) => (
  <Panel title={victoire ? "User " +victoire : "User " +echec} {...otherProps}>
      {fieldFor('name', {entityPath: 'finance'})}
      {fieldFor('amount', {entityPath: 'finance'})}
      {fieldFor('test', {entityPath: 'finance'})}
      {listFor('moves', { redirectEntityPath: ['financialMove'], LineComponent: FinancialMoveLine})}
  </Panel>
)

const selectData = name => (state ={}) => {
  if( !state.customData[name]) {
    console.warn(`SELECT_DATA : there is no ${name} in the dataset of the state`)
    return state.customData;
  }
  return state.dataset[name]
}

class SmartUser extends Component {
    componentWillMount() {
        const {id, load} = this.props;
        // Et voila un load !
        load({id});
    }

    render() {
        const {fieldFor, list} = this.props;
        return (
          <User fieldFor={fieldFor} listFor={list} { ...this.props}/>
        );
    }
};

User.displayName = 'SmartUser ';

const formConfig = {
    formKey: 'userForm',
    entityPathArray: ['finance'],
    loadAction: loadFinanceAction,
    saveAction: saveFinanceAction,
    nonValidatedFields: ['user.firstName']
};

const ConnectedUserForm = compose(
    connectToMetadata(['financialMove', 'finance']),
    connectToForm(formConfig),
    connectToFieldHelpers(),
    connectToState(selectData('customData')),
)(SmartUser );

export default ConnectedUserForm;
