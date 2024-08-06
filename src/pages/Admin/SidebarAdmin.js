import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Home as HomeIcon, Announcement as AnnouncementIcon, School as SchoolIcon, Person as PersonIcon ,AccountCircle as AccountCircleIcon, ExitToApp as ExitToAppIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const SidebarAdmin = () => {
    const navigate = useNavigate();

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <List>
                <ListItem className='mt-5'  button onClick={() => navigate('/admindashbord')}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => navigate('/admindashbord/shownotice')}>
                    <ListItemIcon><AnnouncementIcon /></ListItemIcon>
                    <ListItemText primary="Annonces" />
                </ListItem>
                <ListItem button onClick={() => navigate('/admindashbord/showstudent')}>
                    <ListItemIcon><SchoolIcon /></ListItemIcon>
                    <ListItemText primary="Etudiants" />
                </ListItem>
                <ListItem button onClick={() => navigate('/admindashbord/showteacher')}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary="Professeurs" />
                </ListItem>
                <ListItem className='mt-5' button onClick={() => navigate('/admindashbord/profiladmin')}>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={() => navigate('/admindashbord/logout')}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
               
            </List>
        </Drawer>
    );
};

export default SidebarAdmin;
