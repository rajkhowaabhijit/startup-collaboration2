import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Paper, Grid, Typography, Button} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    featuredWrapper : props => ({
        paddingLeft: theme.spacing(2), 
        paddingRight: theme.spacing(2), 
        paddingTop: theme.spacing(2), 
        background: `linear-gradient(${props.color} 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%)`, 
        marginTop: theme.spacing(3)
    }), 
    shopHeader: props => ({
        color: props.type === 'Best Selling' ? '#121858' : props.type === 'Top Rated Shops' ? '#780000' : '#235500',
        fontWeight: 700, 
        display: 'flex', 
        flexWrap: 'no-wrap', 
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2)
    })
}))

const Wrapper1 = props => {
    const classes = useStyles(props)

    return (
        <Paper elevation={0} className={classes.featuredWrapper}>
            <Typography variant="h5" className={classes.shopHeader} gutterBottom>
                {props.type}
                <Button variant="contained">View All</Button>
            </Typography>

            <Grid container spacing={3} justify="space-evenly">
                {props.children}
            </Grid>
        </Paper>
    )
}

export default Wrapper1