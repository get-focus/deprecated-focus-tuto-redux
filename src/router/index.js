import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';

/* Components */
import App from '../app';
import Home from '../views/user';
import UserList from '../views/user/user-form-list';
import User from '../views/user/user-form';
import UserFinance from '../views/user/user-finance-form';
import UserSelect from '../views/user/user-form-select-checkbox';
import UserTest from '../views/user/user-test-clean-action'

import {hashHistory } from 'react-router';
const paramExtractor = Component => props => <Component id={props.params.id} />
const UserWithParam = paramExtractor(User);
const UserFinanceWithParam = paramExtractor(UserFinance);
const UserListWithParam = paramExtractor(UserList);
const UserSelectWithParam = paramExtractor(UserSelect);
const UserTestWithParam= paramExtractor(UserTest);

const router = <Router history={hashHistory}  key='router'>
  <Route path='/' component={App} key='mainRoute' >
    <IndexRoute component={Home}/>
    {/* Les :id sert à fournir un paramètre à l'url on extrait les paramètres d'url via la props params*/}
    <Route path='user/:id' component={UserWithParam} />
    <Route path='user/finance/:id' component={UserFinanceWithParam} />
    <Route path='user/list/:id' component={UserListWithParam} />
    <Route path='user/select/:id' component={UserSelectWithParam} />
    <Route path='user/test/:id' component={UserTestWithParam} />

  </Route>
</Router>;

 //{/* On injecte comme composant d'application un composant connecté au store redux */}
  //{/* Le composant IndexRoute signifie qui sera appellée par défaut*/}
export default router;
