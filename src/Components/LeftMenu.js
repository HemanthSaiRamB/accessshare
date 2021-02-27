import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from "react-router-dom";
import Products from '../Screens/Products';
import Cart from '../Screens/Cart';
import Orders from '../Screens/Orders';
import Categories from '../Screens/Categories';
import Profile from '../Screens/Profile';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import DnsIcon from '@material-ui/icons/Dns';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function LeftMenu() {
    let history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [screen, setScreen] = React.useState('Products');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{ background: '#212121' }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {screen}
                    </Typography>
                    <IconButton
                        color="inherit"
                        style={{ marginLeft: 'auto' }}
                        onClick={() => history.push("/")}
                    >
                        <PowerSettingsNewIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography>Hello #user</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    {['Products', 'Orders', 'Categories', 'Cart', 'Profile'].map((text, index) => (
                        <div key={index}>
                            <ListItem
                                onClick={() => {
                                    setScreen(text)
                                }}
                                button key={text}>
                                <ListItemIcon>
                                    {
                                        text === 'Products' ?
                                            <ShoppingBasketIcon /> :
                                            text === 'Orders' ?
                                                <AssignmentTurnedInIcon /> :
                                                text === 'Categories' ?
                                                    <DnsIcon /> :
                                                    text === 'Cart' ?
                                                        <AddShoppingCartIcon /> :
                                                        text === 'Profile' ?
                                                            <AccountCircleIcon /> : ''
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                            <Divider />
                        </div>

                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {
                    screen === 'Products' ?
                        <Products /> :
                        screen === 'Orders' ?
                            <Orders /> :
                            screen === 'Categories' ?
                                <Categories /> :
                                screen === 'Cart' ?
                                    <Cart /> :
                                    screen === 'Profile' ?
                                        <Profile /> : ''
                }

            </main>
        </div>
    );
}
