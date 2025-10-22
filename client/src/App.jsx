import React from 'react';
import { useRoutes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AllItems from './pages/ViewCustomItems';
import CreateItem from './pages/CreateCustomItem';
import EditItem from './pages/EditCustomItems';
import ItemDetails from './pages/CustomItemDetails'; // uncomment if exists

import './App.css';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <CreateItem /> },
    { path: '/create', element: <CreateItem /> },
    { path: '/all', element: <AllItems /> },
    { path: '/customitems/:id', element: <ItemDetails /> },
    { path: '/edit/:id', element: <EditItem /> }
  ]);
  

  return (
    <div className="app">
      <Navigation />
      {routes}
    </div>
  );
};

export default App;
