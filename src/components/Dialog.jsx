import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 350,
  },
  closeButton: {
    position: 'absolute',
    right: 2,
    top: 1,
    color: '#9e9e9e',
  },
  media: {
    width: '100%',
    height: 250,
  },
  rightDrawer: {
    padding: 10,
  },
  content: {
    paddingBottom: 20,
  }
}));

const DialogComponent = ({ open, data, onDialogClose }) => {
  const classes = useStyles();
  const onImageLoad = () => {
    console.log("Loaded")
  }
  return (
    <Dialog fullWidth className={classes.root} open={open} TransitionComponent={Transition}
      keepMounted>
      <DialogTitle>
        <IconButton onClick={onDialogClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {data &&
        <DialogContent className={classes.content}>
          <Grid container >

            <Grid item xs={6}>
              <CardMedia
                className={classes.media}
                image={data.ImageURLs && data.ImageURLs.FullSize}
                title={data.Title}
                onLoad={onImageLoad}
              />
            </Grid>
            <Grid item xs={6} className={classes.rightDrawer}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Family</TableCell>
                    <TableCell>{data.Family}</TableCell>
                  </TableRow>
                  {data.CollectiveNoun &&
                    <TableRow>
                      <TableCell>Collective Noun</TableCell>
                      <TableCell>{data.CollectiveNoun}</TableCell>
                    </TableRow>
                  }
                  <TableRow>
                    <TableCell>Width</TableCell>
                    <TableCell>{data.Width}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>{data.Height}</TableCell>
                  </TableRow>
                  {data.Genus &&
                    <TableRow>
                      <TableCell>Genus</TableCell>
                      <TableCell>{data.Genus}</TableCell>
                    </TableRow>
                  }
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </DialogContent>
      }
    </Dialog>
  )
}

DialogComponent.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.object,
  onDialogClose: PropTypes.func
}

export default memo(DialogComponent);