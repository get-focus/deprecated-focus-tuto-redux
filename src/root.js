import React, {PropTypes, Component} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import {Provider as MetadataProvider} from 'focus-graph/behaviours/metadata';
import {Provider as FieldHelpersProvider} from 'focus-graph/behaviours/field';
import {Provider as MasterDataProvider} from 'focus-graph/behaviours/master-data';
import {Provider as SearchProvider} from 'focus-search/behaviours/search';

import * as definitions from './config/entity-definitions';
import * as domains from './config/domains';
import {masterDataConfig} from './config/master-data-config'
import router from './router';


import InputText from 'focus-components/input-text';
import DisplayComponent from 'focus-components/input-display/text';

import SelectComponent from 'focus-components/select-mdl';
import SelectComponentDisplay from 'focus-components/input-display/checkbox';

const _getListMetadata = (contentType, listData) => {
    switch (contentType) {
        case 'DonDiegoType':
        return {
            LineComponent: props => {
                const color = props.isSelected ? 'orange' : 'blue'
                return (
                    <div>
                        <div>Line DonDiegoType {JSON.stringify(props)}</div>
                    </div>)
                },
                actionsLine: [
                    {label: 'Yo', icon: 'print', action: () => {console.log('action')}},
                    {label: 'La', icon: 'print', action: () => {console.log('action')}}

                ],
                sortList : [
                    'ouuuuaaa',
                    'trrropo',
                    'lalal'
                ],
                groupList: [
                    'lala',
                    'lulu',
                    'lolo'
                ]
            }
            break;
            case 'DonRicardoType':
            return {
                LineComponent: props => <div>Line DonRicardoType {JSON.stringify(props)}</div>,
                sortList : [
                    'lala',
                    'lolo',
                    'lulu'
                ],

                groupList: [
                    'lala',
                    'lulu'
                ]
            }
            break;
            default:
            return {
                LineComponent: props => <div>Bien le bonsoir</div>,
                sortList : [],
                groupList: []
            }

        }
    };


    const RootPure = ({store}) => /*On place le provider de store au plus haut afin de pouvoir injecter des informations du store dans toute l'applciation.*/
    <StoreProvider store={store}>
        <MetadataProvider definitions={definitions} domains={domains}>
            <FieldHelpersProvider InputComponent={InputText} DisplayComponent={DisplayComponent} SelectComponent={SelectComponent} SelectComponentDisplay={SelectComponentDisplay}>
                <MasterDataProvider configuration={masterDataConfig}>
                    <SearchProvider store={store} searchMetadata={{getListMetadata : _getListMetadata,
                            scopes:[{value: 'all', label:'All', selected:false}, {value: 'scope', label: 'Scope 01', selected:true}, {value: 'scope2', label:'Scope 02', selected:false}]}}>
                            {router}
                        </SearchProvider>
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
