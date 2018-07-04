import React from 'react';
import { shape, number, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import IconPlus from '@material-ui/icons/Add';
import IconMinus from '@material-ui/icons/Remove';

const styles = ({ palette }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    fontSize: 13,
    fontFamily: 'Roboto',
    color: 'rgba(0, 0, 0, 60%)',
  },
  icon: {
    width: 24,
    height: 24,
  },
  controls: {
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 99,
  },
});

const IntervalSetting = ({ classes, text, value }) => (
  <div className={classes.root}>
    <div className={classes.text}>
      {text}
    </div>
    <div className={classes.controls}>
      <IconButton className={classes.icon} aria-label="Minus">
        <IconMinus className={classes.icon} />
      </IconButton>
      {`${value} min`}
      <IconButton className={classes.icon} aria-label="Plus">
        <IconPlus className={classes.icon} />
      </IconButton>
    </div>
  </div>
);

IntervalSetting.propTypes = {
  text: string.isRequired,
  value: string.isRequired,
  classes: shape({
    root: string.isRequired,
    icon: string.isRequired,
    value: string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(IntervalSetting);
