import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Landing/Home';
import Landing from './page/Landing/Landing';
import Signup from './page/Signup/Signup';
import SignupDone from './page/Signup/SignupDone';
import Login from './page/Login/Login';
import Main from './page/Main/Main';
import MyPage from './page/Mypage/MyPage';
import ModifyProfile from './page/Mypage/ModifyProfile';
import PushNotification from './page/Mypage/PushNotification';
import TodoTemplate from './page/Main/TodoTemplate';

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signupdone" element={<SignupDone />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/mypage" element={<MyPage />} />
          <Route exact path="/edit" element={<ModifyProfile />} />
          <Route exact path="/todo" element={<TodoTemplate />} />
          <Route exact path="/notify" element={<PushNotification />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
