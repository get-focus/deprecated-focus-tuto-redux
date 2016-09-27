import React, {PropTypes, Component} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as MetadataProvider} from 'focus-graph/behaviours/metadata';
import {Provider as FieldHelpersProvider} from 'focus-graph/behaviours/field';
import {Provider as MasterDataProvider} from 'focus-graph/behaviours/master-data';
import {Provider as SessionProvider} from 'focus-application/session/session-components';
import {Provider as PermissionProvider, Permission} from 'focus-application/role';

import * as definitions from './config/entity-definitions';
import * as domains from './config/domains';
import {loadUser} from './services/load-civility'
import {masterDataConfig} from './config/master-data-config'
import router from './router';


import InputText from 'focus-components/input-text';
import DisplayComponent from 'focus-components/input-display/text';

import SelectComponent from 'focus-components/select-mdl';
import SelectComponentDisplay from 'focus-components/input-display/checkbox';


const RootPure = ({store}) => /*On place le provider de store au plus haut afin de pouvoir injecter des informations du store dans toute l'applciation.*/
<StoreProvider store={store}>
    <MetadataProvider definitions={definitions} domains={domains}>
        <SessionProvider service={loadUser}>
          <FieldHelpersProvider InputComponent={InputText} DisplayComponent={DisplayComponent} SelectComponent={SelectComponent} SelectComponentDisplay={SelectComponentDisplay}>
              <MasterDataProvider configuration={masterDataConfig}>
                <PermissionProvider>
                  <Permission hasOne={['lol']}><div>{'Got it'}<div>{router}</div></div></Permission>
                  </PermissionProvider>
              </MasterDataProvider>
          </FieldHelpersProvider>
        </SessionProvider>
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
