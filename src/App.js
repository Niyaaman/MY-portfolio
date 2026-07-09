import React from 'react';
import Home from'./pages/Home';
import './App.css';
import Header from './pages/header';
import About from './pages/About';
import Contact from './pages/conteact';
import Socialmidea from './pages/socialmedia';

function App() {
  return (
    <div className='bg-gray-300 h-dvh'>
      <Header className=''/>
      <Home />
      <About />
      <Contact/>
      <Socialmidea/>
    </div>
  );

}

export default App;
