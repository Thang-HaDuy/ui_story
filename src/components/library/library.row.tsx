import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';

export interface ILibraryRowData {
    id: string;
    name: string;
    avater: string;
    createdAt: string;
    status: string;
    categories: string;
    rating: number;
}

export interface ILibraryRowProp {
    data: ILibraryRowData;
    index: number;
}

const LibraryRow = (prop: ILibraryRowProp) => {
    const { data, index } = prop;
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
                {index + 1}
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
                {data.name ? data.name : 'đang cập nhật'}
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
                {data.createdAt ? data.createdAt?.split('-')[0] : 'đang cập nhật'}
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
                {data.status ? data.status : 'đang cập nhật'}
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
                {data.categories ? data.categories : 'đang cập nhật'}
            </Grid>
            <Grid
                sx={{
                    textAlign: 'center',
                    color: '#b5e745',
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
                <StarIcon sx={{ fontSize: '14px', color: '#b5e745' }} />
                {data.rating ? data.rating : 0}
            </Grid>
        </Grid>
    );
};

export default LibraryRow;
