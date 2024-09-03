import Box from '@mui/material/Box';
import Link from 'next/link';

export interface INaviItem {
    title: string;
    href: string;
}

const NavigationHeadings = ({ items }: { items: INaviItem[] }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: '15px',
                paddingBottom: '8px',
            }}
        >
            <Box
                sx={{
                    textDecoration: 'none',
                    color: 'white',
                    paddingRight: '5px',
                    fontSize: '13px',
                    fontWeight: '300',
                    '&:hover': {
                        color: '#7d7d7d',
                    },
                }}
                component={Link}
                href="/"
            >
                home
            </Box>
            {items.map((item, index) => (
                <Box key={index}>
                    <Box
                        sx={{
                            textDecoration: 'none',
                            color: 'white',
                            paddingRight: '4px',
                            fontSize: '13px',
                            fontWeight: '300',
                            '&::before': {
                                content: '"/"',
                                color: '#ccc',
                                paddingRight: '7px',
                            },
                            '&:hover': {
                                color: '#7d7d7d',
                            },
                        }}
                        component={Link}
                        href={item.href}
                    >
                        {item.title}
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default NavigationHeadings;
