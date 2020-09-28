import React from 'react';
import ShopCarousel from '../../components/Carousel/shop-carousel'
import {carousels as items} from './static'
import {shops as items1} from './static'
import ShopInfo from '../../components/Shop/shop-description'
import Wrapper2 from '../../components/Shop/index'
import ProductCard from '../../components/Cards/product-card'
import {products as items2} from './static'


import Paper from '@material-ui/core/Paper';
import { makeStyles, fade } from '@material-ui/core/styles';
import {Typography, Grid, InputBase, AppBar, Toolbar, TextField, } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';

//Pagination
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    featuredWrapper : props => ({
        background: `linear-gradient(rgba(6,188,218,1) 0%, rgba(255,255,255,1) 21%, rgba(255,255,255,1) 100%)`, 
        marginTop: theme.spacing(1),
    }), 
    searchContainer: {
        position: 'relative',
        border:`1.5px solid ${theme.palette.primary.dark}` ,
        paddingRight: theme.spacing(2), 
        paddingTop: theme.spacing(1), 
        borderRadius: "20px",
        backgroundColor: fade(theme.palette.common.white, .15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(3),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        margin: theme.spacing(1),
      },
      searchInput:{
        border:1,
        borderColor: theme.palette.black,
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      pagination:{

      },
}));

const Shop = () => {

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
            <Grid item key={shop.key} xs={12} sm={12} >
                <ShopInfo 
                    name={shop.name} 
                    description={shop.desc}
                    value={shop.val}
                />
            </Grid>
        ) 
    }) 

    return(
        // <div className="Shop" className={classes.ShopDiv}>
            <Paper elevation={1} className={classes.featuredWrapper}>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <ShopCarousel 
                            items={items}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {shops}                        
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                         Vector Image to be added here
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={6}>
                         <Typography variant='body1'>
                             Showing 15 out of 49 products
                         </Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <Pagination count={10} color="primary" size="large" className={classes.pagination} />
                    </Grid>
                </Grid>
                
                {/* <AppBar position="static">
                    <Toolbar> */}
                        <div className={classes.searchContainer} borderColor="text.primary" borderRadius={20}>
                            <SearchIcon className={classes.searchIcon}/>
                            <TextField placeholder="Search…" className={classes.searchInput} classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
                        </div>
                    {/* </Toolbar>
                </AppBar> */}
          
                <Wrapper2>
                    {products}
                </Wrapper2>
                
            </Paper>           
            
        // </div>
    );
}

export default Shop;

