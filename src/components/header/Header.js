import React, { Component } from 'react';

class Header extends Component {
  render() {
    const text = {
      one: "kora colasuonno ",
      two: "✨ web dev",
      three: " los angeles"
    }
    return (
      // <div className="mw9 ph3 code">
      //   <div className="cf ph2">
      //     <div className="fl w-third">
      //       <div className="bg-white pv1 dark-pink"><p className="f2 mt1 mb1 br bb bg-light-blue mw2">kora colasuonno | web dev | los angeles</p></div>
      //     </div>
      //     <div className="fl w-two-thirds tr">
      //       <div className="bg-white pv1">
      //         <p>
      //           {/* as <Links/> to projects */}
      //           1 / 2 / 3 / 4
      //         </p>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="white pa1">
        <div className="fl mw8 w-two-thirds-l w-100 tl-l tc">
          <p className="dib ma0 f3-l f2">{text.one}</p>
          <p className="dib ma0 f3-l f2">{text.two}</p>
          {/* <p className="dib ma0 f3-l f2">{text.three}</p> */}
        </div>
        <div className="fl w-third-l tr-l w-100 tc">
          <p className="ma0 f3-l f3">
            {/* as <Links/> to projects */}
            ✨ 1 ✨ 2 ✨ 3 ✨ 4 ✨
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
