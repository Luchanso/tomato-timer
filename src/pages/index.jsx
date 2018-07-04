import React from 'react';
import { shape } from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import Timer from '../components/Timer/Timer';
import IntervalSetting from '../components/IntervalSetting/IntervalSetting';

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  card: {
    width: 256,
  },
});

const INTERVAL = {
  WORK: 'work',
  REST: 'rest',
};

class Index extends React.Component {
  state = {
    isStarted: false,
    interval: INTERVAL.WORK,
    startTime: new Date(),
    workIntervalLength: 25 * 60,
    restIntervalLength: 5 * 60,
    totalSeconds: 0,
  };

  handleStart = () => {
    const { interval } = this.state;

    if (interval === INTERVAL.REST) {
      this.setState({
        startTime: new Date(),
      });
    }

    this.setState({
      isStarted: true,
    });
  };

  handleStop = () => {
    this.setState({
      isStarted: false,
    });
  };

  handleToggle = (e) => {
    const { isStarted } = this.state;

    if (isStarted) {
      this.handleStop(e);
    } else {
      this.handleStart(e);
    }
  };

  render() {
    const { classes } = this.props;
    const { isStarted, startTime, interval } = this.state;
    const formatedTime = '25:00';
    const timerText = interval === INTERVAL.REST ? 'rest' : 'work';
    const buttonToggleInterval = interval === INTERVAL.REST ? 'work' : 'rest';

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <Timer text={timerText} time={formatedTime} />
          <CardContent>
            <IntervalSetting text="Work time" value={25} />
            <IntervalSetting text="Rest time" value={5} />
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={this.handleToggle}>
              {isStarted ? 'pause' : 'start'}
            </Button>
            <Button size="small" color="primary">
              {buttonToggleInterval}
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Index.propTypes = {
  classes: shape({}).isRequired,
};

export default withRoot(withStyles(styles)(Index));
