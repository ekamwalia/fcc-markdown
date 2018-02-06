import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="ui stackable one column page grid" id="home-grid">
        <div className="ui piled raised segment">
          <p className="ui black massive ribbon label">What is Markdown?</p>
          <p className="regular-text">
            Markdown is a lightweight markup language with plain text formatting syntax.
            It is designed so that it can be converted to HTML and many other formats using a tool by the same name.
            Markdown is often used to format readme files, for writing messages in online discussion forums,
            and to create rich text using a plain text editor. As the initial description of Markdown contained
            ambiguities and unanswered questions, many implementations and extensions of Markdown appeared over the
            years to answer these issues.
          </p>
        </div>
      </div>
    );
  }
}

export default Home
