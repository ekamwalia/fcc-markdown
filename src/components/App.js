import React , { Component } from 'react';

import Footer from "./Footer";
import Main from "./Main";
import Navbar from './Navbar';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App
