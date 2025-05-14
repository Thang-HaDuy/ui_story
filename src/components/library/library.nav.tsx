import Box from '@mui/material/Box';
import Link from 'next/link';

interface INavItem {
    title: string;
    href: string;
}

const LibraryNav = ({ items, route }: { items: INavItem[]; route: string }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            {items.map((item, index) => (
                <Box
                    component={Link}
                    sx={{
                        width: '3.2%',
                        padding: '5px 1px',
                        margin: '0 .25% .8%',
                        backgroundColor: route != item.title ? '#1b1b1b' : '#b5e745',
                        textAlign: 'center',
                        color: route != item.title ? '#d4d4d4' : '#333',
                        textDecoration: 'none',
                        borderRadius: '3px',
                    }}
                    href={item.href}
                    key={index}
                >
                    {item.title}
                </Box>
            ))}
        </Box>
    );
};

export default LibraryNav;
