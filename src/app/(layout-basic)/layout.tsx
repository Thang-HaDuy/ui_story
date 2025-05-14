import Announcement from '@/components/ui/navigation/items/announcement/Announcement';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
                {children}
            </Box>
        </Container>
    );
};

export default MovieLayout;
