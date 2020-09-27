import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Paper, Grid, Button } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    featuredWrapper : props => ({
        paddingLeft: theme.spacing(2), 
        paddingRight: theme.spacing(2), 
        paddingTop: theme.spacing(2), 
        background: `linear-gradient(${props.color} 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%)`, 
        marginTop: theme.spacing(3)
    }), 

    buttonGrid: props => ({
        display: 'flex', 
        flexWrap: 'no-wrap', 
        justifyContent: 'space-between',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)

    }),
}))

const Wrapper2 = props => {
    const classes = useStyles(props)

    return (
        <Paper elevation={0} className={classes.featuredWrapper}>
            <Grid container spacing={3} justify="space-evenly">
                {props.children}
            </Grid>

            <Grid container className={classes.buttonGrid}>
                <Button variant="contained" color="primary">Previous</Button>
                <Button variant="contained" color="primary">Next</Button>
            </Grid>
        </Paper>
    )
}

export default Wrapper2