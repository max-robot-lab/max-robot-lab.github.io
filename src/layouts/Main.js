import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
// import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

// {props.fullPage ? null : <SideBar />}
const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <ScrollToTop />
    <Helmet titleTemplate="%s | MAX Lab" defaultTitle="MAX Lab" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper2">
      <div id="wrapper">
        <Navigation />
        <div id="main">
          {props.children}
        </div>
      </div>
      <div id="footer">
        <p className="copyright">&copy; MAX Lab, Last updated on May 2025</p>
      </div>
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  // fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  // fullPage: false,
  title: null,
  description: "MAX Lab's website.",
};

export default Main;
