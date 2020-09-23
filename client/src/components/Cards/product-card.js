import React from 'react'
import { Card, Icon, IconButton, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
    actionArea: {
        '&:hover': {
            boxShadow: theme.shadows[16],
        }
    },
    cardMedia: {
        height: 250,
        [theme.breakpoints.down('md')]: {
            height: 200
        }
    }, 
    productHeading: {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    heart: {
        color: '#d50000'
    },
    bottomAction: {
        display: 'flex', 
        justifyContent: 'space-between'
    }
}))

const ProductCard = props => {
    const classes = useStyles()

    return (
        <Card elevation={8} className={classes.actionArea}>
            <CardActionArea>
                <CardMedia
                    image={props.image}
                    className={classes.cardMedia}
                />
                <CardContent>
                    <Typography variant="h6" className={classes.productHeading}>
                        {props.name}
                        <Icon className={classes.heart} >
                            <FavoriteBorderIcon />
                        </Icon>
                    </Typography>
                    <Typography variant="subtitle1">
                        ₹ {props.discounted}<br />
                        <del>{props.price}</del>
                    </Typography>
                    <Rating value={props.rating} readOnly />
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.bottomAction}>
                <Button variant="contained" color="secondary"> 
                    SCHEDULE
                </Button>
                <IconButton color="inherit" className={classes.shareButton}>
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ProductCard