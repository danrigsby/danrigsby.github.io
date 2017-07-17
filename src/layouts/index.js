import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MuiThemeProvider } from 'material-ui/styles';

import '../css/typography.css';

class Template extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Helmet
            title="Dan Rigsby"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit">
                <Link
                  to="/"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Dan Rigsby
                </Link>
              </Typography>
            </Toolbar>
          </AppBar>

          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {this.props.children()}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Template;
