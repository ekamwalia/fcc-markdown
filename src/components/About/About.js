import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="ui stackable one column page center aligned grid" id="home-grid">
        <div className="ui piled raised segment">
          <p className="ui black massive ribbon label">About</p>
          <div className="regular-text center aligned segment">
              freeCodeCamp Markdown Previewer made by Ekam Walia.<br/><br/>
              This project is built using React.js and Semantic UI.<br/><br/>
              The source code for this project is available on <a href="https://github.com/kelsier27/fcc-markdown" target="blank">GitHub.</a>
          </div>
          <div className="regular-text">
            <span><a href="https://github.com/kelsier27" target="blank">
              <i className="icon large black github"></i>
            </a></span>
          </div>
        </div>
      </div>
    );
  }
}

export default About
