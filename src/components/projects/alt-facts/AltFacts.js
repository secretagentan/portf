import React, { Component } from 'react';


class AltFacts extends Component {

  render() {
    return (
      <div className="vh-100">
        <iframe
          sandbox="allow-scripts allow-forms allow-same-origin"
          style={{ border: "none", background: "white", width: "100%", height: "100%" }}
          src="https://aqueous-badlands-81670.herokuapp.com/"
        />
      </div>
    )
  }
}

export default AltFacts;
