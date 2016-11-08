import React from 'react';
import Card from './card';

const routes = [
  {route: '/user/120', destination: 'Adress', description: 'Composant user avec une adresse', title: 'adress'},
  {route: '/user/finance/120', destination: 'Form', description: 'Composant user avec un superbe form', title: 'form'},
  {route: '/user/list/120', destination: 'Custom', description: 'Composant user avec un superbe form custom', title: 'custom'},
  {route: '/user/select/120', destination: 'Custom', description: 'Composant user avec un superbe form display', title: 'display'},
  {route: '/user/test/120', destination: 'Test', description: 'Test clean action', title: 'display'},
  {route: '/messages', destination: 'Messages applicatifs', description: 'Déclanchement de messages applicatifs', title: 'Messages'}
];

const Home = props => <div style={{display: 'flex', flexWrap: 'wrap'}}>{routes.map(route => <Card key={route.route} {...route} />)}</div>;

export default Home;
