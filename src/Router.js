import React from 'react';
import Login from './Login';
import Registration from './Registration';
import ToDos from './ToDos';
import LoginOut from './LogOut';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

export default function Router() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="index" element={<ToDos />} />
          </Route>
         </Routes>
        </BrowserRouter>
  );
}



