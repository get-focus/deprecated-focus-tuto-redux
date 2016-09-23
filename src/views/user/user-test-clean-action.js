import React, {Component, PropTypes} from 'react';
import AdvancedSearch from 'focus-search/components/advanced-search';
import {unitSearchActions, searchAction as search} from '../../search';
import compose from 'lodash/flowRight';
import {connect as connectToSearch} from 'focus-search/behaviours/search';


const searchOptions= {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions
};
const ConnectedComponentAdvancedSearch = compose (
    connectToSearch(searchOptions)
)(AdvancedSearch);
const SearchBarComponent = ({unitSearchDispatch: { group, query, scopeFunction},scope, scopes}) => (
    <SearchBar group={group} query={query} scopes={scopes} scope={scope} scopeFunction={scopeFunction}/>
);
const ConnectedSearchBarComponent = compose(
    connectToSearch(searchOptions)
)(SearchBarComponent);



const MySearch = () => (
    <div>
        <div data-demo='header' className='mdl-shadow--3dp'>
            <h2>Que recherchez-vous ?</h2>
            <ConnectedSearchBarComponent />
        </div>
        <div data-demo='content'>
            <ConnectedComponentAdvancedSearch/>;
        </div>
    </div>
);
MySearch.displayName = 'MySearch';
export default MySearch;
