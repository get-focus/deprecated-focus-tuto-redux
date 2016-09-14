import 'focus-components/style';
import 'material-design-lite/material'
//require('material-design-lite/material.css')
import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import DevTools from './containers/dev-tools';
import Layout from 'focus-application/lib/layout'
import LoadingBar from 'focus-application/lib/fetch'
import ConfirmWrapper from 'focus-application/lib/confirm';
import MessageCenter from 'focus-application/lib/messages';

// Ceci est un sélecteur de state, il sera localisé près de son reducer plus tard.
const userSelector = state => ({...state.user});

const StateDisplayer = connectToStore(s => s)(props => <pre><code>{JSON.stringify(props, null, 4)}</code></pre>)

// On crée le composant Application
const App = props =>
  <Layout LoadingBar={LoadingBar} ConfirmWrapper={ConfirmWrapper} MessageCenter={MessageCenter}>
    <DevTools />
    <h1>Bienvenue dans ce superbe tutoriel dd{props.name} </h1>
    {/* On récupère les définitions dans les props*/}
    {props.children}
    <StateDisplayer/ >
  </Layout>;

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
