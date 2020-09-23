import React from 'react'
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';

const navigationItems = [
    { name: 'Profile', type: 'group', key: 'group-1', children: [
        { name: 'Login', type: 'item', icon: '', key: 'G1child-1' }, 
        { name: 'Sign Up', type: 'item', icon: '', key: 'G1child-2'},
        { name: 'My Schedules', type: 'item', icon: <ViewListRoundedIcon /> , key: 'G1child-3'},
        { name: 'My Orders', type: 'item', icon: '', key: 'G1child-4'},
        { name: 'Favourites', type: 'item', icon: '', key: 'G1child-5'},
        { name: 'My Coupons', type: 'item', icon: '', key: 'G1child-6'},
        { name: 'Gift Cards', type: 'item', icon: '', key: 'G1child-7'},
        { name: 'Cart', type: 'item', icon: '', key: 'G1child-8'},
    ]}, 
    { name: 'Categories', type: 'group', key: 'group-2', children: [
        { name: `Men's Wear`, type: 'item', icon: '', key: 'G2child-1' },
        { name: `Women's Wear`, type: 'item', icon: '', key: 'G2child-2' },
        { name: `Home&Kitchen`, type: 'item', icon: '', key: 'G2child-3' },
        { name: `Electronics`, type: 'item', icon: '', key: 'G2child-4' },
        { name: `Shoes`, type: 'item', icon: '', key: 'G2child-5' },
        { name: `Watches`, type: 'item', icon: '', key: 'G2child-6' },
        { name: `Daily Goods`, type: 'item', icon: '', key: 'G2child-7' },
    ]}, 
    { name: 'Support', type: 'group', key: 'group-3', children: [
        { name: 'Customer Support', type: 'item', icon: '', key: 'G3child-1'},
        { name: 'About Us', type: 'item', icon: '', key: 'G3child-2'},
        { name: 'FAQ', type: 'item', icon: '', key: 'G3child-3'},
    ]}, 
    { name: 'Programmes', type: 'group', key: 'group-4', children: [
        { name: 'Affiliate Programme', type: 'item', icon: '', key: 'G4child-1'},
        { name: 'Referrals', type: 'item', icon: '', key: 'G4child-2'},
        { name: 'Invitees', type: 'item', icon: '', key: 'G4child-3'},
    ]}, 
    { name: 'Join Cartless', type: 'group', key: 'group-5', children: [
        { name: 'Sell Here', type: 'item', icon: '', key: 'G5child-1'},
        { name: 'Be Delivery Executive', type: 'item', icon: '', key: 'G5child-2'},
        { name: 'Join as Intern', type: 'item', icon: '', key: 'G5child-3'},
        { name: 'Work For Us', type: 'item', icon: '', key: 'G5child-4'},
    ]}
]

export default navigationItems