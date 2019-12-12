import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import CardsComponent from '../components/Cards';
import DialogComponent from '../components/Dialog';
import LoaderComponent from '../components/Loader';
import { ANIMAL_URL, FRUIT_AND_VEG_URL } from '../common/Constants';

const MainContainer = () => {
    const [animalsData, setAnimalsData] = useState([]);
    const [modelData, setModelData] = useState({})
    const [showDialog, setShowDialog] = useState(false);
    const [firstButtonActive, setFirstButtonActive] = useState(true);
    const [secondButtonActive, setSecondButtonActive] = useState(false);
    const [loading, setLoading] = useState(true);
    const apiHandler = async (url) => { // common API handler 
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setAnimalsData([...data]);
        setLoading(false);
    }
    const onDialogCloseClickHandler = () => setShowDialog(!showDialog);
    const onThumbClickHandler = (id) => () => {
        const filterData = animalsData && animalsData.filter(row => row.Id === id)
        filterData && setModelData({ ...filterData[0] });
        setShowDialog(!showDialog);
    }
    const onHeaderButtonClickHandler = (item) => () => {
        if (item === "Animals") {
            apiHandler(ANIMAL_URL); // TO DO: Need to remove API call if we already have data
            setSecondButtonActive(false);
            setFirstButtonActive(true);
        } else {
            apiHandler(FRUIT_AND_VEG_URL);
            setFirstButtonActive(false);
            setSecondButtonActive(true);
        }
    }
    useEffect(() => {
        apiHandler(ANIMAL_URL)
    }, []) // dependency injection, to execute function once only
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header onHeaderButtonClickHandler={onHeaderButtonClickHandler} firstButtonActive={firstButtonActive} secondButtonActive={secondButtonActive} />
                {loading ? <LoaderComponent /> : (
                    <>
                        <CardsComponent data={animalsData} onThumbClickHandler={onThumbClickHandler} />
                        <DialogComponent open={showDialog} data={modelData} onDialogClose={onDialogCloseClickHandler} />
                    </>
                )}
            </Grid>
        </Grid>
    )
}

export default MainContainer;