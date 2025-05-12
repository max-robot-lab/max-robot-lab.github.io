import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} to={l.path} className="home-link">
            <img
              src={`${process.env.PUBLIC_URL}/images/favicon/favicon.ico`}
              alt="MAX Lab Logo"
              className="logo"
            />
            {l.label}
          </Link>
        ))}
      <p className="site-description"><a href="/">Multi-modal Autonomous robot eXploration Lab</a></p>
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
