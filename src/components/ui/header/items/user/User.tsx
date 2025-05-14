'use client';

import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import UserDropdown from '@/components/ui/header/items/user/UserDropDown';
import Box from '@mui/material/Box';
import ROUTES from '@/constants/routes';
import { useSession } from 'next-auth/react';

const User = () => {
    const { data: session } = useSession();
    let isLogin: boolean = session != null;

    return isLogin ? (
        <Box
            sx={{
                display: { xs: 'none', md: 'inline-flex' },
                alignItems: 'center',
                backgroundColor: 'background.paper',
            }}
        >
            <UserDropdown />
        </Box>
    ) : (
        <Button
            sx={{
                display: { xs: 'none', md: 'block' },
                lineHeight: '2.2',
                padding: '6px 13px',
                backgroundColor: '#b71c1c',
                color: 'white',
                marginLeft: '10px',
            }}
            component={Link}
            href={ROUTES.LOGIN}
        >
            Đăng Nhập
        </Button>
    );
};

export default User;
