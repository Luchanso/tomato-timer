import React from 'react';
import { shape, string, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = ({ palette }) => ({
  root: {
    background: palette.primary.main,
    height: 128,
    display: 'flex',

    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 24,
  },
  side: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Timer = ({ classes, time, text }) => (
  <div className={classes.root}>
    <div className={classes.side}>
      {text}
    </div>
    <div className={classes.side}>
      {time}
    </div>
  </div>
);

Timer.propTypes = {
  classes: shape({
    root: string.isRequired,
  }).isRequired,
  time: number.isRequired,
  text: string.isRequired,
};

export default withStyles(styles)(Timer);
