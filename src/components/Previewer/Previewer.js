import React,{ Component } from 'react';
import { markdown } from 'markdown';
import Clipboard from 'clipboard';

class Previewer extends Component {

  componentDidMount() {
    new Clipboard('#preview-copy-btn')
  }

  generatePreview(mkd) {
    let previewArea = document.getElementById('preview');
  //  mkd = markdown.toHTML(mkd);
    previewArea.innerHTML = markdown.toHTML(mkd);
    console.log(markdown.toHTML(mkd));
  }

  render() {
    return (
      <div className="ui center aligned two column responsive grid" id="previewer-container">
        <div className="six wide column" id="markdown-container">
          <div className="left aligned ui piled raised segment" id="markdown-segment">
            <p className="ui black massive ribbon label">Markdown</p>
            <textarea
              id="markdown-textarea"
              onChange = { (event)=> {this.generatePreview(event.target.value);} }
            />
          </div>
        </div>
        <div className="one wide column"></div>
        <div className="six wide column" id="preview-container">
          <div className="ui left aligned piled raised segment" id="preview-segment">
            <p className="ui black massive ribbon label" id="preview-header">Preview</p>
            <span id="preview-copy-span">
              <button
                className="ui right floated black basic button"
                id="preview-copy-btn"
                data-tooltip="Copy to clipboard"
                data-position="top left"
                data-clipboard-target="#preview"
              >Copy</button>
            </span>
            <div id="preview-textarea"><p id="preview"></p></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Previewer
