import React from 'react';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Drawer, Toolbar, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const drawerWidth = 240;

const SidebarStudent = () => {
    const location = useLocation();
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    <ListItemButton component={Link} to="">
                        <ListItemIcon>
                            <HomeIcon color={location.pathname === "" ? 'primary' : 'inherit'} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/studentdashbord/profilstudent">
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon color={location.pathname.startsWith("/studentdashbord/profilstudent") ? 'primary' : 'inherit'} />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/studentdashbord/logout">
                        <ListItemIcon>
                            <ExitToAppIcon color={location.pathname.startsWith("/studentdashbord/logout") ? 'primary' : 'inherit'} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    );
};

export default SidebarStudent;
