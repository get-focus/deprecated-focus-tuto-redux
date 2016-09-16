import React, {PureComponent, PropTypes} from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect} from 'react-redux';
import Panel from 'focus-components/panel';

import {confirm} from 'focus-application/lib/confirm/confirm-actions';
import {injectBarContentSummaryHeader, injectBarContentExpandedHeader, triggerPosition, injectActionHeader} from 'focus-application/lib/header/header-actions';
import {pushMessage} from 'focus-application/lib/messages/messages-actions';
import Input from 'focus-components/input-text';

import {ExpandedUserHeader,SummaryUserHeader} from './user-header';

import {loadUserAction, saveUserAction} from '../../actions/user-actions';

const User = ({fieldFor, confirm, pushMessage,injectActionHeader, ...otherProps}) => (
  <div>
  Bien le bonjour
  <Panel title='User' {...otherProps}>
      {fieldFor('uuid', {entityPath: 'user', options: {InputComponent: props => <div>Looooool</div>}})}
      {fieldFor('firstName', {entityPath: 'user'})}
      {fieldFor('lastName', {entityPath: 'user'})}
      <button onClick={ () => confirm('Amelie :pikax: Thomas', {
      resolve: d => console.log('ok', d),
      reject: err =>console.log('ko', err)
    })}>Confirm test</button>

    <button onClick={() => pushMessage({type: 'info', content: `Hello content`, actionHandler: () => alert('pute'),
  actionText: "Old Guy"})}>Message App test</button>
  </Panel>
  <div style={{height: 300, with: '100%'}}>Scroll</div>
  <div style={{height: 300, with: '100%'}}>Scroll</div>
  <div style={{height: 300, with: '100%'}}>Scroll</div>
  <div style={{height: 300, with: '100%'}}>Scroll</div>
  </div>
);

class SmartUser extends PureComponent {
    componentWillMount() {
        const {id, load, injectBarContentSummaryHeader,injectBarContentExpandedHeader, triggerPosition, injectActionHeader} = this.props;

        // Header injection on mount
        injectBarContentSummaryHeader(SummaryUserHeader);
        injectBarContentExpandedHeader(ExpandedUserHeader);
        injectActionHeader({primary: [{action: () => console.log('Primaire'), label: 'Primaire', icon: 'home'}], secondary: [{action: () => console.log('secondary'), label: 'Secondaire', icon: 'home'}]})
        // have an always closed header
        // triggerPosition(0);

        // Et voila un load !
        load({id});
    }
    componentWillUnMount(){
      injectBarContentSummaryHeader(null);
      injectBarContentExpandedHeader(null);
    }
    render() {
        const {fieldFor} = this.props;
        return (
            <User fieldFor={fieldFor} { ...this.props}/>
        );
    }
};

User.displayName = 'SmartUser ';

    const formConfig = {
        formKey: 'userForm',
        entityPathArray: ['user'],
        loadAction: loadUserAction,
        saveAction: saveUserAction,
        nonValidatedFields: ['user.firstName'],
        mapDispatchToProps: {confirm, pushMessage, injectBarContentSummaryHeader,
injectBarContentExpandedHeader, triggerPosition, injectActionHeader}
        // mapDispatchToProps: dispatch => {confirm: (...args)=> dispatch(confirm(...args)) }
        // Up to you to choose the easiest way :+1:
        // equivalent to connect(null, {confirm, pushMessage })(SmartUser)
    };

const ConnectedUserForm = compose(
    connectToMetadata(['user']),
    connectToForm(formConfig),
    connectToFieldHelpers()
)(
  /*
  fake tricks to extract dispatch into the props.
  QUestion => @Ephrame should this be provided by the form connect ?
  */
  //connect(null, {confirm, pushMessage })(SmartUser)
  SmartUser
);


    export default ConnectedUserForm;
