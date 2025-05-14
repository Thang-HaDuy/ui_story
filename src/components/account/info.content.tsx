import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const InfoContent = () => {
    return (
        <Box
            sx={{
                padding: '40px 20px',
                backgroundColor: '#263238',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Box>xs=3</Box>
                </Grid>
                <Grid item xs={9}>
                    <Box>xs=9</Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default InfoContent;
