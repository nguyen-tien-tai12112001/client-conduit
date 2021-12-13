import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import { Footer, Header } from './components';
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
