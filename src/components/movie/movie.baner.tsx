import Box from '@mui/material/Box';

const MovieBaner = () => {
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
            }}
        >
            <Box></Box>
            <Box></Box>
            <Box
                component="img"
                src="/slide.webp"
                sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    overflow: 'hidden',
                    position: 'absolute',
                    '&::before': {
                        content: '""',
                        backgroundColor: '#263238',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        opacity: 0.3,
                    },
                }}
            />
        </Box>
    );
};

export default MovieBaner;
