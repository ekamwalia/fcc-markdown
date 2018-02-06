import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="ui center aligned container">
        <div className="four column wide"></div>
        <div className="ui bottom fixed compact massive menu">
          <div className="header item">
            Made &nbsp; <i className="icon red heart"></i> by &nbsp;<a href="https://github.com/kelsier27" target="blank"> kelsier27</a>
         </div>
        </div>
    </div>
    );
  }
}

export default Footer
