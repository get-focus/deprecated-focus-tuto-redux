import React from 'react';
import {IndexRoute, Router, Route} from 'react-router';

/* Components */
import App from '../app';
import Home from '../views/user';
import UserList from '../views/user/user-form-list';
import User from '../views/user/user-form';
import UserFinance from '../views/user/user-finance-form';
import UserSelect from '../views/user/user-form-select-checkbox';
import {hashHistory } from 'react-router';

 //{/* On injecte comme composant d'application un composant connecté au store redux */}
  //{/* Le composant IndexRoute signifie qui sera appellée par défaut*/}
export default 
<Router history={hashHistory} >
  <Route path='/' component={App} >
    <IndexRoute component={Home}/>
    {/* Les :id sert à fournir un paramètre à l'url on extrait les paramètres d'url via la props params*/}
    <Route path='user/:id' component={({params}) => <User id={params.id} />} />
    <Route path='user/finance/:id' component={({params}) => <UserFinance id={params.id} />} />
    <Route path='user/list/:id' component={({params}) => <UserList id={params.id} />} />
    <Route path='user/select/:id' component={({params}) => <UserSelect id={params.id} />} />
  </Route>
</Router>;
