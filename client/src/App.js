
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
       <h1>My React App</h1>
       <Footer />
      </div>
    );
  }
}

export default App;
