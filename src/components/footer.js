import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    backgroundColor:'rgba(255,255,255,0.975)', 
    height:'60px',
    borderTop: '#f5f3f7 1px solid',
  },
  text: {
    margin: '0 auto',
    maxWidth: '900px',
    textAlign: 'center',
    padding: '10px 0',
    color: '#a1a1a1'
  }
};

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footer}
    >
      <div className={classes.text}
      >
        &copy;pandax
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);