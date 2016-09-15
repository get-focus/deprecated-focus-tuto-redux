import React from 'react';


function ExpandedUserHeader({fieldFor}){
  return <div className='ExpandedUserHeader'>
      {fieldFor('uuid', {entityPath: 'user'})}
      {fieldFor('firstName', {entityPath: 'user'})}
      {fieldFor('lastName', {entityPath: 'user'})}
  </div>
};
