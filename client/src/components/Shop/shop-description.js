import React from 'react'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

//Icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


const useStyles = makeStyles(theme => ({
    ShopInfoGrid: {
        marginTop: theme.spacing(4),
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    ShopDesc:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    
    ratings:{
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(-2),
    }
}))

const ShopInfo = props => {
    const classes = useStyles()

    return (

    <Grid item xs={12} sm={12} className={classes.ShopInfoGrid}>
        <Typography variant="h4">
            {props.name}
        </Typography>
        <Typography variant='body1' className={classes.ShopDesc}>
            {props.description}
        </Typography>
        <Box component="fieldset" mb={3} borderColor="transparent" className={classes.ratings}>
            <Rating name="read-only" value={props.value} readOnly/>
        </Box>
        <Typography variant="subtitle1">
            Location in text
        </Typography>
        <Grid container>
            <Grid item xs={6}>
                <Grid container>
                <Grid item xs={4}>
                <IconButton color="inherit">
                    <LocationOnIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4}>
            <IconButton color="inherit">
                    <MapIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4}>
            <IconButton color="inherit">
                    <ContactPhoneIcon />
                </IconButton>
            </Grid>
                </Grid>
            </Grid>

            <Grid item xs={6}>

            </Grid>
        </Grid>
    </Grid>

        
    )
}

export default ShopInfo