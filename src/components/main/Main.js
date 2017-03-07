import React, { Component } from 'react';

// class P5Wrapper extends React.Component {
//   componentDidMount() {
//     this.canvas = new p5(sketch, this.refs.wrapper)
//   }
//   componentWillReceiveProps(props, newprops) {
//     ...
//     if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
//       this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
//     }
//   }
//   render() {
//     return <div ref="wrapper"></div>
//   }
// }


class Main extends Component {


  render() {

    // return (
    //
    //   <div>
    //     <p className="pa4">hiiiii</p>
    //     {/* background: in processing or a-frame: 3d blocks that float with
    //       a very flat light source so that only the outlines of the white
    //       (or pale-yellow) objects are visible against a flat pink background
    //       as they randomly tumble around the screen */}
    //
    //   </div>
    // );
    return React.createElement('svg', {
      width: '640',
      height: '480'
    }, React.createElement('circle', {
      cx: '50',
      cy: '50',
      r: '40',
      stroke: 'black',
      fill: 'white'
    }))
  }
}

export default Main;
