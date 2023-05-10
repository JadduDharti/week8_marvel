import React, { useState } from "react";
import {
    Drawer as MUIDrawer,
    List,
    ListItemText,
    ListItemButton,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Box
} from "@mui/material";
import  MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/themes";
import { DataTable } from "../DataTable";
import { MarvelForm } from "../MarvelForm/MarvelForm";

const drawerWidth = 240;

const myStyles = {
    appBar: {
        backgroundColor: '#424242',
        transition: 'all 0.2s ease-in-out',
        color: 'white'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: 'all 0.2s ease-in-out'
    },
    menuButton: {
        marginRight: 2,
        color: 'white'
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: '#333333'
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#333333'
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: 2,
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: 3,
        transition: 'all 0.2s ease-in-out',
        marginLeft: 0,
        backgroundColor: '#222222',
        color: 'white'
    },
    contentShift: {
        transition: 'all 0.2s ease-in-out',
        marginLeft: 0,
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    toolbar_button: {
        backgroundColor: '#f24949',
        color: 'white',
        '&:hover': {
            backgroundColor: '#a31600'
        }
    }
};

export const Dashboard = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    }

    const handleDialogClickClose = () => {
        setDialogOpen(false);
    }

    const itemsList = [
        {
            text: 'Home',
            onClick: () => navigate('/')
        },
        {
            text: 'Sign In',
            onClick: () => navigate('/signin')
        }
    ]

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                sx={open ? myStyles.appBarShift : myStyles.appBar}
                position="fixed"
            >
                <Toolbar sx={myStyles.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={open ? myStyles.hide : myStyles.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap> Dashboard</Typography>
                    <Button sx={myStyles.toolbar_button} onClick={handleDialogClickOpen}>Add Character to Your Favoirite List</Button>

                    {/*Dialog Pop Up begin */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add New Character</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Add A New Character</DialogContentText>
                            <MarvelForm />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                        </DialogActions>

                    </Dialog>
                </Toolbar>
            </AppBar>
            <MUIDrawer
                sx={open ? myStyles.drawer : myStyles.hide}
                variant="persistent"
                anchor="left"
                open={open}
                style={{ width: drawerWidth }}
            >
                <Box
                    sx={myStyles.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </Box>
                <Divider />
                <List>
                    {itemsList.map((item) => {
                        const { text, onClick } = item;
                        return (
                            <ListItemButton key={text} onClick={onClick}>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </MUIDrawer>
            <Box sx={myStyles.content} >
                <Box sx={myStyles.drawerHeader} />

                {/* <h1>Hello World Until Data Shows Up</h1> */}
                <DataTable />

            </Box>
        </Box>
    )
};
