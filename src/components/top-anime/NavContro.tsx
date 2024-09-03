'use client';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface IProp {
    currentRoute: string;
}

const NavContro = (props: IProp) => {
    const { currentRoute } = props;

    const navItems = [
        { title: 'NGÀY', href: '/top-anime/day', route: 'day' },
        { title: 'ĐÁNH GIÁ', href: '/top-anime/vote', route: 'vote' },
        { title: 'THÁNG', href: '/top-anime/month', route: 'month' },
        { title: 'MÙA', href: '/top-anime/season', route: 'season' },
        { title: 'NĂM', href: '/top-anime/year', route: 'year' },
    ];
    return (
        <Box
            sx={{
                marginBottom: '20px',
                paddingX: '10px',
                backgroundColor: 'rgba(0, 0, 0, .2)',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                height: '40px',
            }}
        >
            <Typography>BẢNG XẾP HẠNG</Typography>
            {navItems.map((item, index) => (
                <Box
                    key={index}
                    component={Link}
                    href={item.href}
                    sx={{
                        marginLeft: '20px',
                        display: 'flex',
                        textDecoration: 'none',
                        color: 'white',
                        position: 'relative',
                        height: '100%',
                        borderBottom: currentRoute != item.route ? 'transparent' : '#b5e745 solid 2px',
                        // borderBottom: '#b5e745 solid 2px;',
                        fontWeight: currentRoute != item.route ? '300' : '600',
                        '&:hover': { color: '#7d7d7d' },
                        alignItems: 'center',
                    }}
                >
                    {item.title}
                </Box>
            ))}
        </Box>
    );
};

export default NavContro;
