import React, { Component } from 'react';
import Overlay from '../overlay/Overlay.js'

class App extends Component {
  render() {
    return (
      <div>
        <Overlay />
        {this.props.children}
      </div>
    );
  }
}

export default App;
