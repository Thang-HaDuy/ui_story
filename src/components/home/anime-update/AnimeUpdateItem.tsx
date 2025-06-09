import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageMovie from '@/components/ui/shared/ImageMovie';
import Grid from '@mui/material/Grid';
import Rating from '@/components/ui/shared/Rating';
import TotalEpisode from '@/components/ui/shared/TotalEpisode';
import Link from 'next/link';
import SelectHover from '@/components/ui/shared/SelectHover';
import HoverInfor, { IHoverInfor } from '@/components/ui/shared/HoverInfor';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ThemeContent } from '@/components/home/ThemeContent';
import { GenerateUrl } from '@/utils/helper';
import ROUTES from '@/constants/routes';
import { API_BASE_URL } from '@/constants/api';

export interface IAnimeUpdateItem {
    avatar: string;
    views: string;
    itemHover: IHoverInfor;
}

const AnimeUpdateItem = ({ item, index }: { item: IAnimeUpdateItem; index: number }) => {
    return (
        <ThemeProvider theme={ThemeContent}>
            <Grid item key={index} xs={6} sm={4} md={3} lg={2.4}>
                <Box
                    sx={{
                        marginX: '10px',
                        marginBottom: '20px',
                        position: 'relative',
                        '&:hover': {
                            [`& .classhover${index}`]: { display: 'flex' },
                        },
                    }}
                >
                    <Box
                        component={Link}
                        href={ROUTES.MOVIE + '/' + GenerateUrl(item.itemHover.name, item.itemHover.id)}
                        sx={{
                            textDecoration: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                marginBottom: '10px',
                                position: 'relative',
                                [`& .classhover${index}`]: {
                                    '& svg': {
                                        fontSize: '60px',
                                    },
                                },
                            }}
                        >
                            <ImageMovie src={API_BASE_URL + item.avatar} alt={item.itemHover.name} />
                            <Rating number={item.itemHover.info.rate} />
                            <TotalEpisode episode={item.itemHover.info.episode} />
                            <SelectHover className={`classhover${index}`} />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography
                                sx={{
                                    fontSize: '14px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    color: '#fff',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    width: '100%',
                                }}
                            >
                                {item.itemHover.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '12px',
                                    fontWeight: '300',
                                    lineHeight: '20px',
                                    color: '#7d7d7d',
                                }}
                            >
                                {`Lượt xem: ${item.views}`}
                            </Typography>
                        </Box>
                    </Box>
                    <HoverInfor index={index} item={item.itemHover} />
                </Box>
            </Grid>
        </ThemeProvider>
    );
};

export default AnimeUpdateItem;
