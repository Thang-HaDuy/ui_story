import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LibraryRow from './library.row';

const LibraryTable = () => {
    return (
        <Box>
            <Grid
                container
                sx={{
                    fontSize: '13px',
                    fontWeight: '600',
                    lineHeight: '18.5px',
                    backgroundColor: '#212b30',
                }}
            >
                <Grid
                    sx={{
                        textAlign: 'center',
                        color: '#78909c',
                        fontSize: '13px',
                        fontWeight: '600',
                        lineHeight: '18.5px',
                        border: '0.5px solid #0f1416',
                        paddingY: '8px',
                    }}
                    item
                    xs={0.5}
                >
                    #
                </Grid>
                <Grid
                    sx={{
                        color: '#78909c',
                        fontSize: '13px',
                        fontWeight: '600',
                        lineHeight: '18.5px',
                        border: '0.5px solid #0f1416',
                        padding: '8px',
                    }}
                    item
                    xs={4.5}
                >
                    Kết quả
                </Grid>
                <Grid
                    sx={{
                        textAlign: 'center',
                        color: '#78909c',
                        fontSize: '13px',
                        fontWeight: '600',
                        lineHeight: '18.5px',
                        border: '0.5px solid #0f1416',
                        paddingY: '8px',
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
                        lineHeight: '18.5px',
                        border: '0.5px solid #0f1416',
                        padding: '8px',
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
                        lineHeight: '18.5px',
                        border: '0.5px solid #0f1416',
                        padding: '8px',
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
                        lineHeight: '18.5px',
                        border: '0.5px solid #0f1416',
                        paddingY: '8px',
                    }}
                    item
                    xs={1}
                >
                    Đánh giá
                </Grid>
            </Grid>
            <LibraryRow />
            <LibraryRow />
            <LibraryRow />
            <LibraryRow />
            <LibraryRow />
            <LibraryRow />
            <LibraryRow />
        </Box>
    );
};

export default LibraryTable;
