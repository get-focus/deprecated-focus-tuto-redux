import React from 'react';
import {connect as connectToStore} from 'react-redux';

// focus-application
import Layout from 'focus-application/lib/layout'
import LoadingBar from 'focus-application/lib/fetch'
import ConfirmWrapper from 'focus-application/lib/confirm';
import MessageCenter from 'focus-application/lib/messages';
import AppHeader from 'focus-application/lib/header';
import DevTools from './dev-tools'
// focus-components
import ConfirmationPopin from 'focus-components/confirmation-popin';

// Wrap application component with focus components
const ConfirmComponent = props => <ConfirmWrapper {...props}  ConfirmationModal={ConfirmationPopin}/>
const AppMessages = props => <MessageCenter {...props} //>

const StateDisplayer = connectToStore(s => s)(props => <pre><code>{JSON.stringify(props, null, 4)}</code></pre>)


//confirmation-popin

function AppLayout(props){
  return  (
    <Layout AppHeader={AppHeader} LoadingBar={LoadingBar} ConfirmWrapper={ConfirmComponent} MessageCenter={MessageCenter}>
    {props.hasDevtools  && <DevTools />}
    <h1>Bienvenue dans ce superbe tutoriel dd{props.name} </h1>
    {/* On récupère les définitions dans les props*/}
    {props.children}
    <StateDisplayer/ >
  </Layout>);
}

AppLayout.defaultProps = {
  hasDevtools: false
}

export default AppLayout
