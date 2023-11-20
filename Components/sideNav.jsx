import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { OpenInNewOutlined, PersonPinCircle, PinDrop } from '@material-ui/icons';

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
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
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
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight({ topNav, handler, rightBar }) {
    const classes = useStyles();
    const theme = useTheme();

    const handleDrawerOpen = () => {
        handler.handleLeftbar(false);
        handler.handleRightbar(true)
    };

    const handleDrawerClose = () => {
        handler.handleRightbar(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <div style={{ position: 'absolute', right: '20px', top: '7px' }}>
                <IconButton
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(rightBar && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={rightBar}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {topNav.map((text, index) => (
                        text === 'Deposit' ? (<ListItem button onClick={() => handler.handleModal(text)} key={text}>
                            <ListItemText primary={text} />
                        </ListItem>) : text === 'Withdraw' ? (<ListItem button onClick={() => handler.handleModal1(text)} key={text}>
                            <ListItemText primary={text} />
                        </ListItem>) :
                            (<ListItem button onClick={() => handler.handlePages(text)} key={text}>
                                <ListItemText primary={text} />
                            </ListItem>)

                    ))}
                </List>
                <Divider />
                <List>
                    {['Transactions', 'Logout'].map((text, index) => (
                        <ListItem button key={text}>
                            {text === 'Logout' && <ListItemIcon> <OpenInNewOutlined /> </ListItemIcon>}
                            {text === 'Logout' ? <ListItemText onClick={() => handler.handleLogout} primary={text} /> : <ListItemText onClick={() => handler.handleTransactions()} primary={text} />}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}