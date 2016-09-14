/* <style> */
import 'focus-components/style';
import 'focus-application/lib/layout/layout.scss'
/* </style>*/
import 'material-design-lite/material'
//require('material-design-lite/material.css')
import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';

import AppLayout from './containers/layout'

// Ceci est un sélecteur de state, il sera localisé près de son reducer plus tard.
const userSelector = state => ({...state.user});


// On crée le composant Application
const App = props => <AppLayout {...props} />;

App.defaultProps = {
  name: 'Without name maybe not...'
}

App.propTypes = {
  name: PropTypes.string.isRequired
}
// On exporte le composant Application connecté au store redux.
export default compose(
                  connectToStore(userSelector),
                  connectToMetadata(['user','address','financialMove'])
               )(App);
