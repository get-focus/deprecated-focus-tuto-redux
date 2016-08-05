import React, {Component, PropTypes} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {loadUserAction, saveUserAction} from '../../actions/user-actions';

import Panel from 'focus-graph/components/panel';
import compose from 'lodash/flowRight';


const User = ({fieldFor, ...otherProps}) => (
  <Panel title='User' {...otherProps}>
      {fieldFor('uuid', {entityPath: 'user'})}
      {fieldFor('firstName', {entityPath: 'user'})}
      {fieldFor('lastName', {entityPath: 'user'})}
  </Panel>
)


class SmartUser extends Component {
    componentWillMount() {
        const {id, load} = this.props;
        // Et voila un load !
        load({id});
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
    nonValidatedFields: ['user.firstName']
};

const ConnectedUserForm = compose(
    connectToMetadata(['user']),
    connectToForm(formConfig),
    connectToFieldHelpers()
)(SmartUser );

export default ConnectedUserForm;
