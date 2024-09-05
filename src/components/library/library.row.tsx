import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const LibraryRow = () => {
    return (
        <Grid
            container
            sx={{
                fontSize: '13px',
                fontWeight: '600',
                lineHeight: '18.5px',
                backgroundColor: '#1a2327',
            }}
        >
            <Grid
                sx={{
                    textAlign: 'center',
                    color: '#78909c',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '0.5px solid #0f1416',
                    paddingY: '8px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                }}
                item
                xs={0.5}
            >
                #
            </Grid>
            <Grid
                sx={{
                    border: '0.5px solid #0f1416',
                    padding: '8px',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                }}
                item
                xs={0.7}
            >
                <Box
                    component="img"
                    sx={{
                        width: '40px',
                        height: '50px',
                        objectFit: 'cover',
                    }}
                    src="/name2.jpg"
                ></Box>
            </Grid>
            <Grid
                sx={{
                    color: '#78909c',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '0.5px solid #0f1416',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                item
                xs={3.8}
            >
                Kết quả
            </Grid>
            <Grid
                sx={{
                    textAlign: 'center',
                    color: '#78909c',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '0.5px solid #0f1416',
                    paddingY: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                item
                xs={0.7}
            >
                Năm
            </Grid>
            <Grid
                sx={{
                    color: '#78909c',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '0.5px solid #0f1416',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                item
                xs={1}
            >
                Status
            </Grid>
            <Grid
                sx={{
                    color: '#78909c',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '0.5px solid #0f1416',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                }}
                item
                xs={4.3}
            >
                Thể loại
            </Grid>
            <Grid
                sx={{
                    textAlign: 'center',
                    color: '#78909c',
                    fontSize: '13px',
                    fontWeight: '600',
                    border: '0.5px solid #0f1416',
                    paddingY: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                item
                xs={1}
            >
                Đánh giá
            </Grid>
        </Grid>
    );
};

export default LibraryRow;
