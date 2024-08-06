import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton, Menu, MenuItem, InputBase, Badge, Avatar } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon, Menu as MenuIcon } from '@mui/icons-material';
import SidebarStudent from './SidebarStudent';
import { styled, alpha } from '@mui/material/styles';

import { authService } from '../../service/authService';

const drawerWidth = 240;

const username = authService.getUserName(localStorage.getItem('token'));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function StudentDashbord() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const navigate = useNavigate();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        navigate('/studentdashbord/profilstudent');
        handleMenuClose();
    };

    const handleSettingsClick = () => {
        navigate('/studentdashbord/settings'); // Adjust this route as needed
        handleMenuClose();
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const menuId = 'primary-search-account-menu';

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${isSidebarOpen ? drawerWidth : 0}px)`,
                    marginLeft: isSidebarOpen ? `${drawerWidth}px` : 0,
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleSidebar}
                        sx={{ marginRight: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Student Dashboard
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Typography variant="body2" sx={{ marginLeft: 1, marginRight: 2, fontSize: '0.875rem' }}>
                                {username}
                            </Typography>
                            <Avatar alt="Profile Picture" src="https://th.bing.com/th/id/OIP.fzbbZPO8yXyHrlv31J9LCwHaHa?w=512&h=512&rs=1&pid=ImgDetMain" />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {isSidebarOpen && <SidebarStudent />}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: '#f2f2f2',
                    p: 3,
                    overflowY: 'auto',
                    height: '100vh',
                    transition: 'margin 0.3s ease-in-out',
                }}
            >
                <Toolbar />
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: 2,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
            </Menu>
        </Box>
    );
}
