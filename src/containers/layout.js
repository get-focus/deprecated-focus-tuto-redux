import React from 'react';
import {connect as connectToStore} from 'react-redux';

// focus-application
import Layout from 'focus-application/lib/layout'
import ScrollTrigger from 'focus-application/lib/layout/scroll-trigger';
import LoadingBar from 'focus-application/lib/fetch'
import ConfirmWrapper from 'focus-application/lib/confirm';
import MessageCenter from 'focus-application/lib/messages';
import AppHeader from 'focus-application/lib/header';
import DevTools from './dev-tools'

// focus-components
import ConfirmationPopin from 'focus-components/confirmation-popin';
import SnackBar from 'focus-components/snackbar';
import Animation from 'focus-components/animation';

// This should be done by default by focus-application
import { headerIsExpandedSelector} from 'focus-application/lib/header/header-reducer';
import { expandHeader, unExpandHeader} from 'focus-application/lib//header/header-actions'
const ConnectedScrollTrigger = connectToStore(headerIsExpandedSelector,{expandHeader, unExpandHeader})(ScrollTrigger);

const SB = props => {
  const {id,content, title, deleteMessage} = props;

  return (
    <div className="mdl-js-snackbar mdl-snackbar mdl-snackbar--active animated slideInUp" data-upgraded="MaterialSnackbar" aria-hidden="false">
      <div className="mdl-snackbar__text">{props.content}</div>
      <button className="mdl-snackbar__action" type="button" onClick={() => deleteMessage({id})}>Close</button>
    </div>
  );
}

// Wrap application component with focus components
const ConfirmComponent = props => <ConfirmWrapper {...props}  ConfirmationModal={ConfirmationPopin}/>
const AppMessages = props => <MessageCenter {...props} MessageComponent={SnackBar} />

const StateDisplayer = connectToStore(s => s)(props => <pre><code>{JSON.stringify(props, null, 4)}</code></pre>)


//confirmation-popin

function AppLayout(props){
  return  (
    <ConnectedScrollTrigger>
      <Layout AppHeader={AppHeader} LoadingBar={LoadingBar} ConfirmWrapper={ConfirmComponent} MessageCenter={AppMessages}>
        {props.hasDevtools  && <DevTools />}
        <h1>Bienvenue dans ce superbe tutoriel dd{props.name} </h1>
        {/* On récupère les définitions dans les props*/}
        {props.children}
        {/* <StateDisplayer/ > */}
    </Layout>
  </ConnectedScrollTrigger>
)
}

AppLayout.defaultProps = {
  hasDevtools: false
}

export default AppLayout
