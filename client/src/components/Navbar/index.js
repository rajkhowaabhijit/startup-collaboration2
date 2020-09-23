import React, {useEffect} from 'react';
import windowSize from 'react-window-size'
import {connect} from 'react-redux'

import { makeStyles, fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import SimpleMenu from './menu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    title: props => ({
        flexGrow: props.mode === 'big-screen' ? 0 : 1
    }),
    menuButton: {
        marginRight: theme.spacing(2),
    },
    searchBar: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    }
}));

const Navbar = (props) => {
    useEffect(() => {
        if(props.windowWidth < 960) {
            props.changeMode('small-screen')
        } else {
            props.changeMode('big-screen')
        }
    }, [props.windowWidth, props])

    const classes = useStyles(props);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar} >
                <Toolbar>
                    <IconButton color="inherit" >
                        <LocalMallIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cartless
                    </Typography>
                    {props.mode === 'big-screen' && (
                        <div className={classes.searchBar}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </div>
                    )}
                    {props.mode === 'big-screen' && <Button color="inherit">Login</Button> }
                    <IconButton color="inherit">
                        <ViewListRoundedIcon />
                    </IconButton>
                    {
                        props.mode === 'big-screen' ? (
                            <>
                                <IconButton color="inherit"> 
                                        <FavoriteIcon />
                                </IconButton>
                                <IconButton color="inherit">
                                    <ShoppingCartIcon />
                                </IconButton>
                                <Button color="inherit" onClick={handleClick}>
                                    More
                                    <ArrowDropDownIcon />
                                </Button>
                            </>
                        ) : (
                            <IconButton onClick={() => props.changeNavOpen()} color="inherit" >
                                <MoreVertRoundedIcon />
                            </IconButton>
                        )
                    }
                </Toolbar>
            </AppBar>
            <SimpleMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        mode: state.nav.mode, 
        isNavOpen: state.nav.isNavOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeMode: (payload) => dispatch({ type: 'CHANGE_NAV_MODE', payload}),
        changeNavOpen: () => dispatch({type: 'CHANGE_NAV_OPEN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(Navbar))