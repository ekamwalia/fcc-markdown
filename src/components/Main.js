import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from "./About/About";
import Home from "./Home/Home";
import Previewer from "./Previewer/Previewer";

class Main extends Component {
    render() {
      return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/previewer" component={Previewer} />
            <Route path="/about" component={About} />
        </Switch>
      );
    }
}

export default Main
