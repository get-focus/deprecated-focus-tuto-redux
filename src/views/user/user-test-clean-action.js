import User from './user-finance-form';


import React, {Component, PropTypes} from 'react';



class UserTest extends Component {
    componentWillMount() {
    }

    render() {
        const {fieldFor, list} = this.props;
        return (
          <User />
        );
    }
};

UserTest.displayName = 'SmartUser ';
export default UserTest;
