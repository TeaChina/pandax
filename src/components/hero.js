import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = {
  hero: {
    background: 'no-repeat url("https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom center',
    textAlign: 'center',
  },
  h1: {
    color: 'rgba(255,255,255, .95)',
    paddingTop: '160px',
    paddingBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  subtitle: {
    paddingTop:'20px',
    paddingBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'rgba(255,255,255, .95)',
  }
};

function Hero(props) {
  const { classes } = props;

  return (
    <div className={classes.hero}>
          <h1 className={classes.h1}>Chinese tea surprises in your mailbox twice a month.</h1>
          <div className={classes.subtitle}>$29 monthly with FREE shipping even to United State.</div>

          <Button variant="raised" color="secondary" className='xxx' style={{borderRadius: '25px',}}>
            Subscribe now
          </Button>
      </div>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);