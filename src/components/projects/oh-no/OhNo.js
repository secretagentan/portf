import React, { Component } from 'react';


class OhNo extends Component {

  render() {
    return (
      <div className="vh-100">
        <iframe
          sandbox="allow-scripts allow-forms allow-same-origin"
          style={{ border: "none", background: "white", width: "100%", height: "100%" }}
          src="https://trashdaemon.github.io/existential-crisis-app/"
        />
      </div>
    )
  }
}

export default OhNo;
