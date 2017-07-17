import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>Software Architect, Developer, Technical Leader, and Geek. Currently specializing in ReactJs & NodeJs. Employed at @salesforce in glorious Indianapolis, IN</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    );
  }
}
