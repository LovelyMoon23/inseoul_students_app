import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './page/Login/Login'
import Signup from './page/Signup/Signup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
