import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SimpleMenu = props => {
    return (
        <Menu
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={() => props.setAnchorEl(null)}
        >
            <MenuItem >Sign Up</MenuItem>
            <MenuItem >About Us</MenuItem>
            <MenuItem >Support</MenuItem>
            <MenuItem >FAQ</MenuItem>
        </Menu>
    );
}

export default SimpleMenu
