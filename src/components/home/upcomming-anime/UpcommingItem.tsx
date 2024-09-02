import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageMovie from '@/components/ui/shared/ImageMovie';
import Grid from '@mui/material/Grid';
import Rating from '@/components/ui/shared/Rating';
import Link from 'next/link';
import SelectHover from '@/components/ui/shared/SelectHover';
import HoverInfor, { IHoverInfor } from '@/components/ui/shared/HoverInfor';
import TextComing from '@/components/ui/shared/TextComing';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ThemeContent } from '@/components/home/ThemeContent';

export interface IUpcommingItem {
    img: string;
    views: string;
    rating: number;
    itemHover: IHoverInfor;
}
const UpcommingItem = ({ item, index }: { item: IUpcommingItem; index: number }) => {
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
                        href={'/'}
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
                            <ImageMovie src={item.img} alt={item.itemHover.name} />
                            <Rating number={item.rating} />
                            <SelectHover className={`classhover${index}`} />
                            <TextComing />
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

export default UpcommingItem;
