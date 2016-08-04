import React, {PropTypes, Component} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as MetadataProvider} from 'focus-redux/behaviours/metadata';
import {Provider as FieldHelpersProvider} from 'focus-redux/behaviours/field';
import {Provider as MasterDataProvider} from 'focus-redux/behaviours/master-data';

import * as definitions from './config/entity-definitions';
import * as domains from './config/domains';
import {masterDataConfig} from './config/master-data-config'
import router from './router';

const RootPure = ({store}) => /*On place le provider de store au plus haut afin de pouvoir injecter des informations du store dans toute l'applciation.*/
<StoreProvider store={store}>
  <MetadataProvider definitions={definitions} domains={domains}>
    <FieldHelpersProvider >
      <MasterDataProvider configuration={masterDataConfig}>
        {router}
      </MasterDataProvider>
      </FieldHelpersProvider>
  </MetadataProvider>
</StoreProvider>;

RootPure.propTypes = {
  //history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

class Root extends Component {
    render(){
      return <RootPure {...this.props}/>
    }
}

export default Root;
