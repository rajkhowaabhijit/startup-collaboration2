import React from 'react'
import Hero from '../../components/Carousel'
import Wrapper1 from '../../components/Wrapper1'
import ProductCard from '../../components/Cards/product-card'
import ShopCard from '../../components/Cards/shop-card'
import {carousels as items} from './static'
import {shops as items1} from './static'
import {products as items2} from './static'
import {recents as items3} from './static'

import {Typography, IconButton, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import WhatshotRoundedIcon from '@material-ui/icons/WhatshotRounded'

const useStyles = makeStyles(theme => ({
    featured: {
        color: theme.palette.primary.dark, 
        marginTop: theme.spacing(5)
    }, 
    featuredIconWrapper: {
        height: `calc(${theme.typography.h3.fontSize} + 10px)`,
        width: `calc(${theme.typography.h3.fontSize} + 10px)`
    }, 
    featuredIcon: {
        height: `calc(${theme.typography.h3.fontSize} - 5px)`,
        width: `calc(${theme.typography.h3.fontSize} - 5px)`,
    }
}))

const Landing = props => {
    const classes = useStyles()

    const products = items2.map(product => {
        return (
            <Grid item key={product.key} xs={12} md={6} >
                <ProductCard 
                    image={product.avatar}
                    name={product.name}
                    price={product.price}
                    discounted={product.discounted}
                    rating={product.rating}
                />
            </Grid>
        )
    })

    const shops = items1.map(shop => {
        return (
            <Grid item key={shop.key} xs={12} md={6} >
                <ShopCard 
                    name={shop.name} 
                    description={shop.desc}
                    image= {shop.avatar}
                />
            </Grid>
        ) 
    }) 

    const recents = [
        ...items3.products.map(recent => {
            return (
                <Grid item key={recent.key} xs={12} md={6}>
                    <ProductCard 
                        image={recent.avatar}
                        name={recent.name}
                        price={recent.price}
                        discounted={recent.discounted}
                        rating={recent.rating}
                    />
                </Grid>
            )
        }), 
        ...items3.shops.map(recent => {
            return (
                <Grid item key={recent.key} xs={12} md={6}>
                    <ShopCard 
                        name={recent.name}
                        description={recent.desc}
                        image={recent.avatar}
                    />
                </Grid>
            )
        })
    ]

    return (
        <>
            <Hero 
                items={items}
            />
            <Typography 
                variant="h3" 
                className={classes.featured} 
                align="center" 
                gutterBottom
            >
                <IconButton 
                    disableRipple 
                    color="inherit" 
                    className={classes.featuredIconWrapper}
                >
                    <WhatshotRoundedIcon className={classes.featuredIcon} />
                </IconButton>
                Featured
            </Typography>
            <Wrapper1 
                type="Best Selling" 
                color="rgba(6,188,218,1)"
            >
                {products}
            </Wrapper1>
            <Wrapper1 
                type="Top Rated Shops" 
                color="rgba(255,62,101,1)"
            >
                {shops}
            </Wrapper1>
            <Wrapper1 
                type="Based On Your Recent Activity"
                color="rgba(103,255,0,1)"
            >
                {recents}
            </Wrapper1>
        </>
    )
}

export default Landing