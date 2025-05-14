import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import MenuItems from '@/components/ui/header/items/menu/MenuItem';
import User from '@/components/ui/header/items/user/User';
import Search from '@/components/ui/header/items/search/Search';
import ButtonMobile from '@/components/ui/header/items/mobile/ButomMobile';
import ROUTES from '@/constants/routes';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundImage: 'none', boxShadow: 'none' }}>
            <Container>
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            minWidth: '105px',
                            maxWidth: '108px',
                            lineHeight: '0',
                            marginRight: '2rem',
                        }}
                        component={Link}
                        href={ROUTES.HOME}
                    >
                        <img style={{ width: '100%' }} src="/logoz.webp" alt="My Image" />
                    </Box>

                    <MenuItems />

                    <Search />

                    <ButtonMobile />

                    <User />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
