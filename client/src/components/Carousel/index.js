import React from 'react';
import {connect} from 'react-redux'
import Carousel from 'react-material-ui-carousel'
import {Paper, Button, CardMedia, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
    hero: {
        paddingTop: theme.spacing(2), 
        paddingLeft: theme.spacing(2), 
        paddingRight: theme.spacing(2), 
        [theme.breakpoints.down('md')] : {
            paddingTop: 0, 
            paddingLeft: 0, 
            paddingRight: 0, 
        }
    },  
    heroImage:{
        height: 300, 
        [theme.breakpoints.down('md')] : {
            height:  200
        }
    }, 
    heroItems: {
        paddingLeft: 0,
        paddingRight: 0, 
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(1), 
            paddingRight: theme.spacing(1), 
        }
    },
    heroItemInner: {
        marginLeft: 0, 
        marginRight: 0, 
        [theme.breakpoints.down('md')]: {
            marginLeft: theme.spacing(1), 
            marginRight: theme.spacing(2)
        }
    },
    heroHeading: {
        fontWeight: 'bold'
    },
    heroDescription: {
        marginTop: theme.spacing(2)
    },
    heroButton: {
        marginTop: theme.spacing(2)
    }
}))

const Hero = (props) =>  {
    const classes = useStyles(props)

    const slides = props.items.map(item => {
        return (
            <Paper elevation={0} key={item.key} >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={7}>
                        <CardMedia 
                            className={classes.heroImage}
                            image={item.url}
                        />
                    </Grid>
                    <Grid item container xs={12} md={5} className={classes.heroItems} >
                        <Grid item className={classes.heroItemInner}>
                            <Typography variant="h5" className={classes.heroHeading}>
                                {item.heading}
                            </Typography>
                            <Typography variant="body2" className={classes.heroDescription} >
                                {item.description}
                            </Typography>
                            <Button variant="contained" color="primary" className={classes.heroButton}>
                                {item.button}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        )
    })

    return (
        <Carousel
            className={classes.hero}
            navButtonsAlwaysVisible
            interval="2500"
            indicators={false}
        >
            {slides}
        </Carousel>
    )
}

const mapStateToProps = state => {
    return {
        screenMode: state.nav.mode
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)