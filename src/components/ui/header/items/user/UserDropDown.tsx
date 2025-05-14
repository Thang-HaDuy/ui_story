'use client';

import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import { signOut } from 'next-auth/react';

const UserDropdown = () => {
    // const settings = ['Thông tin tài khoản', 'Hộp phim', 'Lịch sử', 'Đăng xuất'];
    const settings = [
        {
            title: 'Thông tin tài khoản',
            func: () => {
                handleCloseUserMenu();
            },
        },
        {
            title: 'Hộp phim',
            func: () => {
                handleCloseUserMenu();
            },
        },
        {
            title: 'Lịch sử',
            func: () => {
                handleCloseUserMenu();
            },
        },
        {
            title: 'Đăng xuất',
            func: () => {
                handleCloseUserMenu();
                signOut();
            },
        },
    ];
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <Box sx={{ marginLeft: '10px' }}>
                <Badge variant="dot" color="error">
                    <NotificationsIcon />
                </Badge>
            </Box>
            <Box sx={{ flexGrow: 0, marginLeft: '10px' }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar>N</Avatar>
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting, index) => (
                        <MenuItem key={index} onClick={setting.func}>
                            <Typography textAlign="center">{setting.title}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
};

export default UserDropdown;
