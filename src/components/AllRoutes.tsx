import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';
import PrivateOutlet from './PrivateOutlet';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Navigate to='/' replace />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/dashboard' element={<PrivateOutlet />}>
        <Route path='' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default AllRoutes;
