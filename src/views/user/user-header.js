import React from 'react';
import  {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {selectFieldsByFormKey} from 'focus-graph/store/create-store';

function PureExpandedUserHeader({textFor}){
    return (
        <div className='ExpandedUserHeader'>
            <br />
            <br />
            <br />
            <div>{textFor('uuid', {entityPath: 'user'})}</div>
            <div>{textFor('firstName', {entityPath: 'user'})}</div>
            <div>{textFor('lastName', {entityPath: 'user'})}</div>
            <br />
            <br />
            <br />
        </div>
    )
};

function PureUserHeader({textFor}){
    return (
        <div className='UserHeader'>
            <span>{textFor('uuid', {entityPath: 'user'})}</span>
            <span>{textFor('firstName', {entityPath: 'user'})}</span>
            <span>{textFor('lastName', {entityPath: 'user'})}</span>
        </div>
    )
};

export const ExpandedUserHeader = compose(
    connectToState(selectFieldsByFormKey('userForm')),
    connectToMetadata(['user']),
    connectToFieldHelpers()
)(PureExpandedUserHeader);

export const SummaryUserHeader = compose(
    connectToState(selectFieldsByFormKey('userForm')),
    connectToMetadata(['user']),
    connectToFieldHelpers()
)(PureUserHeader);
