import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="white pv1 ph2">
        <div className="fl mw8 w-two-thirds-l w-100 tl-l tc">
          <p className="dib ma0-ns mt2 mb0 f2-ns f3 tracked-tight b">kora colasuonno</p>
          <p className="dib ma0-ns mt2 mb0 f2-ns f3 tracked-tight b">✨</p>
          <a href="https://github.com/trashdaemon"
            className="dib ma0-ns mt2 mb0 f2-ns f3 tracked-tight b no-underline white">
            web dev
          </a>
        </div>
        <div className="fr w-third-l tr-l w-100 tc">
          <div className="ma0">
            {this.props.projects.map( (project, index) => {
              let i = index + 1;
              return (
                <div key={i} className="dib">
                  <Link
                    to={project.name} key={i}
                    className="ma0 f2 b tracked-mega no-underline white"
                    >{i}</Link>
                    <p className="dib ma0 f2-ns f3 b tracked-mega no-underline white">
                      {(i !== 4 ? this.props.worlds[index] : null )}
                    </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
