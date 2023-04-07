//rafce --command to create template: download ES7 React/Redux/GraphQL/React-Native Snippets
//npm install react-icons
import React from 'react';
import { CTA, Brand, Navbar } from './components';
import { Footer, Blog, Features, Possibility, WhatGPT3, Header } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>  
      <Brand/>    
      <WhatGPT3/>    
      <Features/>    
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
