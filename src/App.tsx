import React, { useState } from 'react';
import { DatePicker, message,Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Login, Register } from './pages';
import { Header } from './components';
import Router from './routers';

function App() {
  
  return (
    <>
    <Header/>
    <Router/>
  </>
  );
}

export default App;
