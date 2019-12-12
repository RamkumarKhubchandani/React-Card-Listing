import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    top: 70,
    bottom: 0,
    width: '100%',
    height: '100vh',
    opacity: 0.9,
    backgroundColor: grey[50],
  },
  progress: {
    margin: theme.spacing(2),
  },

}));

const LoaderComponent = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.root}
      direction="column"
      alignItems="center"
      justify="center">
      <CircularProgress className={classes.progress} />
    </Grid>
  );
}

export default LoaderComponent;