import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            React Landing Page
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#features">Features</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#services">Services</Link>
            </li>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
