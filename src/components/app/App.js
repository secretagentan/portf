import React, { Component } from 'react';
import Header from '../header/Header.js'

class App extends Component {
  render() {
    return (
      <div className="vh-100 w-100 bg-pink">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
