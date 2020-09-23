import React from 'react';
import navigationItems from './items'
import { makeStyles } from '@material-ui/core/styles';
import {Drawer, Toolbar, List, Divider, ListItem, ListSubheader, ListItemIcon, ListItemText} from '@material-ui/core';
import windowSize from 'react-window-size'
import {connect} from 'react-redux'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Navigation = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                open={props.isNavOpen}
                variant={props.mode === 'big-screen' ? "permanent" : "temporary"}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onClose={() => props.changeNavOpen()}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    {
                        navigationItems.map((ele, index) => {
                            return (
                                <div key={ele.key}>
                                    <List
                                        subheader={
                                            <ListSubheader>
                                                {ele.name}
                                            </ListSubheader>
                                        }
                                        key={ele.key}
                                    >
                                    <Divider />
                                        {
                                            ele.children.map(children => {
                                                return (
                                                    <ListItem button key={children.key}>
                                                        <ListItemIcon>
                                                            {children.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={children.name} />
                                                    </ListItem>
                                                )
                                            })
                                        }
                                    </List>
                                    <Divider />
                                </div>
                            )
                        })
                    }
                </div>
            </Drawer>                
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isNavOpen: state.nav.isNavOpen, 
        mode: state.nav.mode
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeNavOpen: () => dispatch({type: 'CHANGE_NAV_OPEN'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(Navigation))
