
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Landing from './components/layout/Landing.jsx';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
       <Footer />
      </div>
    );
  }
}

export default App;
