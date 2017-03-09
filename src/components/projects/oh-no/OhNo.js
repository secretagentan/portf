import React, { Component } from 'react';


class OhNo extends Component {

  render() {
    return (
      <div className="vh-100">
        <iframe
          sandbox="allow-scripts"
          style={{ border: "none", background: "white", width: "100%", height: "100%" }}
          src="https://trashdaemon.github.io/project_01_build_a_game/"
        />
      </div>
    )
  }
}

export default OhNo;
