import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="white pv1 ph2">
        <div className="fl mw8 w-two-thirds-l w-100 tl-l tc">
          <p className="dib ma0 f2-ns f4 tracked-tight b">kora colasuonno</p>
          <p className="dib ma0 f2-ns f4 tracked-tight b">✨</p>
          <p className="dib ma0 f2-ns f4 tracked-tight b">web dev</p>
        </div>
        <div className="fl w-third-l tr-l w-100 tc">
          <p className="ma0 f2-ns b">
            {this.props.projects.map( (project, index) => {
              let i = index + 1
              return <Link to={project} key={i}>{i + (i !== 4 ? "." : null )}</Link>
            })}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
