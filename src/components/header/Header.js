import React, { Component } from 'react';

class Header extends Component {
  render() {
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
        <div className="fl w-two-thirds">
          <p className="ma0 f3">
            ✨ kora colasuonno ✨ web dev ✨ los angeles ✨
          </p>

        </div>
        <div className="fl w-third tr">
          <p className="ma0 f3">
            {/* as <Links/> to projects */}
            ✨ 1 ✨ 2 ✨ 3 ✨ 4 ✨
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
