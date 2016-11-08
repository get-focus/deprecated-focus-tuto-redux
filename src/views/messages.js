import React, {PropTypes} from 'react';
import {connect as connectToState} from 'react-redux';
import {pushMessage, pushMessageError, pushMessageWarning, pushMessageSuccess} from 'focus-application/messages/messages-actions';
import Button from 'focus-components/button';
import compose from 'lodash/flowRight';

const Messages = ({pushMessage, pushMessageError, pushMessageWarning, pushMessageSuccess}) => {
    return (
        <div>
            <Button label='Add error message' onClick={() => pushMessageError({content: 'This is an error'})} />
            <Button label='Add warning message' onClick={() => pushMessageWarning({content: 'This is a warning'})} />
            <Button label='Add info message' onClick={() => pushMessage({content: 'This is an info'})} />
            <Button label='Add success message' onClick={() => pushMessageSuccess({content: 'This is an success'})} />
        </div>
    );
};

const SmartComponent = connectToState(null, {pushMessage, pushMessageError, pushMessageWarning, pushMessageSuccess})(Messages)
SmartComponent.displayName = 'SmartComponent';
export default SmartComponent;
