import React, {PureComponent, PropTypes} from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect} from 'react-redux';
import Panel from 'focus-components/panel';

import {confirm} from 'focus-application/confirm/confirm-actions';
import {injectBarContentSummaryHeader, injectBarContentExpandedHeader, triggerPosition, injectActionHeader} from 'focus-application/header/header-actions';
import {pushMessage} from 'focus-application/messages/messages-actions';
import Input from 'focus-components/input-text';

import {ExpandedUserHeader,SummaryUserHeader} from './user-header';

import {loadUserErrorAction} from '../../actions/user-actions';

const Error = ({fieldFor, confirm, pushMessage,injectActionHeader, ...otherProps}) => (
  <div>
  Lala
  <Panel title='User' {...otherProps}>
      {fieldFor('uuid', {entityPath: 'user', options: {InputComponent: props => <div>Looooool</div>}})}
      {fieldFor('firstName', {entityPath: 'user'})}
      {fieldFor('lastName', {entityPath: 'user'})}
      </Panel>
  </div>
);

class SmartUserError extends PureComponent {
    componentWillMount() {
        const {id, load, injectBarContentSummaryHeader,injectBarContentExpandedHeader, triggerPosition, injectActionHeader} = this.props;
        // Et voila un load !
        triggerPosition(0)
        console.log('jdhfs', loadUserErrorAction)
        load({id});
    }
    render() {
        const {fieldFor} = this.props;
        return (
            <Error fieldFor={fieldFor} { ...this.props}/>
        );
    }
};

SmartUserError.displayName = 'SmartUser ';

    const formConfig = {
        formKey: 'userForm',
        entityPathArray: ['user'],
        loadAction: loadUserErrorAction,
        nonValidatedFields: ['user.firstName'],
        mapDispatchToProps: {confirm, pushMessage, injectBarContentSummaryHeader,injectBarContentExpandedHeader, triggerPosition, injectActionHeader}
    };

const ConnectedUserError = compose(
    connectToMetadata(['user']),
    connectToForm(formConfig),
    connectToFieldHelpers()
)(SmartUserError);


export default ConnectedUserError;
