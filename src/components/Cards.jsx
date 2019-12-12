
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardComponent from './Card';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingBottom: 20,
  },

}));

const CardsComponent = ({ data, onThumbClickHandler }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>

      {
        data && data.map(row => (
          <Grid item xs={12} lg={3} md={3} sm={6} key={row.Title}>
            <CardComponent data={row} onThumbClickHandler={onThumbClickHandler} />
          </Grid>
        ))
      }
    </Grid>
  )
}

CardsComponent.propTypes = {
  data: PropTypes.array,
  onThumbClickHandler: PropTypes.func
}

export default memo(CardsComponent);