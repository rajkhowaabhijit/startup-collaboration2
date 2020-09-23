import React from 'react'
import { Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';

const useStyles = makeStyles(theme => ({
    cardMedia: {
        height: 150,
        [theme.breakpoints.down('md')]: {
            height: 100
        }
    }, 
    heart: {
        color: '#d50000'
    }
}))

const ShopCard = props => {
    const classes = useStyles()

    return (
        <Card elevation={8}>
            <CardHeader
                title={props.name}
                action={
                    <IconButton className={classes.heart} >
                        <FavoriteIcon />
                    </IconButton>
                }
            />
            <CardMedia
                image={props.image}
                className={classes.cardMedia}
            />
            <CardContent>
                <Typography variant="body1" color="textSecondary" component="p">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton color="inherit">
                    <ShareIcon />
                </IconButton>
                <IconButton color="inherit">
                    <OpenInNewRoundedIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ShopCard