import React, { Component } from 'react';
import Header from '../header/Header.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        "dots-n-boxes",
        "ripe-af",
        "alt-facts",
        "oh-no"
      ],
      worlds: ["🌎","🌍","🌏"]
    }
  }
  render() {
    return (
      <div className="vh-100 w-100 bg-pink">
        <Header projects={this.state.projects} worlds={this.state.worlds}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
