import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="ui top massive menu">
        <Link to="/">
          <div className="header item">
            FCC MarkDown Previewer
          </div>
        </Link>
        <div className="right menu">
          <Link to="/">
            <a className="item">
              What Is Markdown?
            </a>
          </Link>
          <Link to="/previewer">
            <a className="item">
              Previewer
            </a>
          </Link>
          <Link to="/about">
            <a className=" item">
              About
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar
