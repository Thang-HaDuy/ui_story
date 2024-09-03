import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IRowAnime } from './Anime.slide';

const RowAnimeTop = ({ item }: { item: IRowAnime }) => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${item.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingY: '30px',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                display: 'flex',
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
                01
            </Box>
            <Box
                component="img"
                src={item.avatar}
                sx={{
                    width: '96px',
                    height: '148px',
                    border: '2px solid #fff',
                    marginRight: '15px',
                }}
            ></Box>
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    sx={{
                        fontSize: '26px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        color: '#fff',
                    }}
                >
                    {item.name}
                </Typography>
                <Typography>{item.title}</Typography>
            </Box>
            <Box component="span" sx={{ fontSize: '22px', marginRight: '20px' }}>
                Tập {item.episode}
            </Box>
        </Box>
    );
};

export default RowAnimeTop;
