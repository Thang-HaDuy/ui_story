import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Sidebar from '@/components/ui/sidebar/Sidebar';
import Announcement from '@/components/ui/navigation/items/announcement/Announcement';

const MovieLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Container sx={{ padding: { xs: '0', md: '20px 30px' } }}>
            <Box
                sx={{
                    backgroundColor: 'background.paper',
                    padding: '18px',
                }}
            >
                <Announcement />
                <Box
                    sx={{
                        display: 'flex',
                        gap: '20px',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>{children}</Box>
                    <Box sx={{ width: { xs: 'auto', md: '300px' }, flexShrink: 0 }}>
                        <Sidebar />
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default MovieLayout;
