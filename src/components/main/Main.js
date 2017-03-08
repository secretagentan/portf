import React, { Component } from 'react';


  //   background: in processing or a-frame: 3d blocks that float with
  //   a very flat light source so that only the outlines of the white
  //   (or pale-yellow) objects are visible against a flat pink background
  //   as they randomly tumble around the screen



class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      x: 50,
      y: 50
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  };

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  };

  render() {
    return (
      <svg className="mt0"
        width="100%" height="100%" onMouseMove={this.handleMouseMove}>
        <circle cx={this.state.x} cy={this.state.y} r="40" stroke="black" fill="white" />
      </svg>
    )
  };
};

export default Main;
