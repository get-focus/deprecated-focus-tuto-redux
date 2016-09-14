import React, {Component, PropTypes} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {loadUserAction, saveUserAction} from '../../actions/user-actions';
import {connect} from 'react-redux';
import Panel from 'focus-components/panel';
import compose from 'lodash/flowRight';
import {confirm} from 'focus-application/lib/confirm/confirm-actions';
import Input from 'focus-components/input-text';
let msgId = 0;

const User = ({fieldFor, confirm, ...otherProps}) => (
    <div>
        <Panel title='User' {...otherProps}>
            {fieldFor('uuid', {entityPath: 'user', options: {InputComponent: props => <div>Looooool</div>}})}
            {fieldFor('firstName', {entityPath: 'user'})}
            {fieldFor('lastName', {entityPath: 'user'})}
            <button onClick={ () => confirm('Amelie :pikax: Thomas', {
                    resolve: d => console.log('ok', d),
                    reject: err =>console.log('ko', err)
                })}>Confirm test</button>

                <button onClick={() => dispatch({type: 'PUSH_MESSAGE', message:{id: `msg_${msgId++}`, type: 'info', content: `Hello content ${msgId}`}})}>Message App test</button>
            </Panel>

        </div>

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
    )(
        /*
        fake tricks to extract dispatch into the props.
        QUestion => @Ephrame should this be provided by the form connect ?
        */
        connect(null, {confirm})(SmartUser)
    );

    export default ConnectedUserForm;
