import React, {Component, PropTypes} from 'react';
import find from 'lodash/find';

import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMasterData} from 'focus-graph/behaviours/master-data';
import {loadUserAction, saveUserAction} from '../../actions/user-actions';

import Panel from 'focus-components/panel';
import compose from 'lodash/flowRight';

class UserForm extends Component {
    componentWillMount() {
        const {id, load, loadMasterData} = this.props;
        load({id});
        loadMasterData();
    }

    render() {
        const { fields, fieldFor, selectFor} = this.props;
        const civilityField = find(fields, {name: 'civility', entityPath: 'user'});
        return (
            <Panel title='User with more details for Mrs' {...this.props}>
                {fieldFor('uuid', {entityPath: 'user'})}
                {selectFor('civility', {entityPath: 'user', masterDatum: 'civility'})}
                {civilityField && civilityField.rawInputValue === 'MRS' && fieldFor('firstName', {entityPath: 'user'})}
                {civilityField && civilityField.rawInputValue === 'MRS' && fieldFor('lastName', {entityPath: 'user'})}
            </Panel>
        );
    }
};

UserForm.displayName = 'UserForm';

const formConfig = {
    formKey: 'userCustomForm',
    entityPathArray: ['user', 'address'],
    loadAction: loadUserAction,
    saveAction: saveUserAction,
    nonValidatedFields: ['user.firstName']
};

//Connect the component to all its behaviours (respect the order for store, store -> props, helper)
const ConnectedUserForm = compose(
    connectToMetadata(['user']),
    connectToMasterData(['civility']),
    connectToForm(formConfig),
    connectToFieldHelpers()
)(UserForm);

export default ConnectedUserForm;
