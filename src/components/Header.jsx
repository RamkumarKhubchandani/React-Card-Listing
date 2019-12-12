import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        "&:active": {
            backgroundColor: "green"
        }
    },
    button: {
        marginTop: 10,
        marginRight: 10,
    },
}));


const Header = ({ onHeaderButtonClickHandler, firstButtonActive, secondButtonActive }) => {
    const classes = useStyles();
    return (
        <Grid container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center">
            <Button className={classes.button} variant={`${firstButtonActive ? 'contained' : 'outlined'}`} color="primary" onClick={onHeaderButtonClickHandler("Animals")}>Animals</Button>
            <Button className={classes.button} variant={`${secondButtonActive ? 'contained' : 'outlined'}`} color="primary" onClick={onHeaderButtonClickHandler("Fruit & Veg")}>Fruit & Veg</Button>
        </Grid>
    )
}

export default memo(Header);