import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="white pv1 ph2">
        <div className="fl mw8 w-two-thirds-l w-100 tl-l tc">
          <a title="say hi"
            href="mailto:kora.colasuonno@gmail.com"
            className="dib ma0-ns mt2 mb0 f2-ns f3 tracked-tight b no-underline white"
            // style={{ textShadow: "-0.5px 0.5px 0 black"}}
            >
              kora colasuonno
            </a>
          <Link title="root" to="/"
            className="dib ma0-ns mt2 mb0 f2-ns f3 tracked-tight b no-underline white"
            // style={{ textShadow: "-0.5px 0.5px 0 black"}}
            >
              ✨
            </Link>
          <a title="github" href="https://github.com/trashdaemon"
            // style={{ textShadow: "-0.5px 0.5px 0 black"}}
            className="dib ma0-ns mt2 mb0 f2-ns f3 tracked-tight b no-underline white"
          >
            web dev
          </a>
        </div>
        <div className="fr w-third-l tr-l w-100 tc">
          <div className="ma0">
            {this.props.projects.map( (project, index) => {
              let i = index + 1;
              return (
                <div key={i} className="dib">
                  <Link title={project.name}
                    to={project.name} key={i}
                    className="proj-link ma0 f2 b tracked-mega no-underline white"
                    >{i}</Link>
                    <p className="dib ma0 mb2 f2-ns f3 b tracked-mega no-underline white">
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
