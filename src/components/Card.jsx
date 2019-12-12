import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '90%',
    marginRight: 20,
    height: 300,
    marginBottom: 25,
    backgroundColor: grey[100],
    width: '100%',
  },
  media: {
    width: 100,
    height: 80,
    cursor: 'pointer',
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 8,  // TO DO: We can manage via JS to support crose browser
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

const CardComponent = ({ data, onThumbClickHandler }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      {/* <CardHeader
      /> */}
      <CardContent>
        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center">
          <Grid item xs={12}>
            <CardMedia
              className={classes.media}
              image={data.ImageURLs.Thumb}
              title={data.Title}
              onClick={onThumbClickHandler(data.Id)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h3">
              {data.Title}
            </Typography>
          </Grid>
        </Grid>
        <CardActionArea>
          <Tooltip title={data.Description} arrow>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
              {data.Description}
            </Typography>
          </Tooltip>

        </CardActionArea>
      </CardContent>

    </Card >
  );
}

export default memo(CardComponent);