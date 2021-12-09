import React, { useState } from 'react';
import { DatePicker, message,Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Login, Register } from './pages';
import { Header,Footer } from './components';
import Router from './routers';

function App() {
  
  return (
    <>
    <Header/>
    <Router/>
    <Footer/>
  </>
  );
}

export default App;
