import React from 'react';
import Link from 'gatsby-link';
import Button from 'material-ui/Button';

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h1>No Content</h1>
        <Button raised><Link to="/" style={{ textDecoration: 'none' }}>Go back to the homepage</Link></Button>
      </div>
    );
  }
}
