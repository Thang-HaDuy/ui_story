import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IRowAnime } from './Anime.slide';

const RowAnime = ({ item, index }: { item: IRowAnime; index: number }) => {
    return (
        <Box
            sx={{
                paddingY: '10px',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1a2327',
                borderBottom: '1px solid #222e33',
            }}
        >
            <Box
                component="span"
                sx={{
                    fontSize: '26px',
                    width: '60px',
                    textAlign: 'center',
                }}
            >
                {++index}
            </Box>
            <Box
                component="img"
                src={item.avatar}
                sx={{
                    width: '45px',
                    height: '60px',
                    marginRight: '15px',
                }}
            ></Box>
            <Box sx={{ flexGrow: 1, paddingRight: '10px' }}>
                <Typography
                    sx={{
                        fontSize: '16px',
                        maxWidth: '550px',
                        fontWeight: '500',
                        color: '#fff',
                        marginY: '4px',
                    }}
                >
                    {item.name}
                </Typography>
                <Typography
                    sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        maxWidth: '550px',
                        fontSize: '14px',
                        fontWeight: '300',
                        color: 'gray',
                    }}
                >
                    {item.title}
                </Typography>
            </Box>
            <Box component="span" sx={{ fontSize: '14px', marginRight: '20px', color: '#9e9e9e', fontWeight: '300' }}>
                Tập {item.episode}
            </Box>
        </Box>
    );
};

export default RowAnime;
