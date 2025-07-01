import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SelectHover from '../ui/shared/SelectHover';
import { API_BASE_URL } from '@/constants/api';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { GenerateUrl } from '@/utils/helper';

export interface IMovieBanerProp {
    datas: IMovieBanerData;
    movieSlug: string;
}
export interface IMovieBanerData {
    avatar: string;
    background: string;
    name: string;
    description: string;
    episode: number;
    createdAt: string;
    countViews: number;
    rate: number;
    averageRate: number;
    episodeId: string;
}

const MovieBaner = (prop: IMovieBanerProp) => {
    const { datas, movieSlug } = prop;
    return (
        <Box
            sx={{
                width: '100%',
                padding: '20px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                backgroundImage: `url('${API_BASE_URL} + ${datas.avatar}'})`,
                marginBottom: '20px',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu đen với độ trong suốt 50%
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box sx={{ marginLeft: '200px', marginTop: '20px' }}>
                    <Typography
                        component="h1"
                        sx={{
                            color: '#b5e745',
                            lineHeight: '36px',
                            padding: '7px 0',
                            fontSize: '30px',
                            fontWeight: '300',
                        }}
                    >
                        {datas.name ? datas.name : 'đang cập nhật'}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0',
                        width: '180px',
                        height: '260px',
                        [`& .hello123`]: {
                            '& svg': {
                                fontSize: '60px',
                            },
                        },
                        '&:hover': {
                            [`& .hello123`]: { display: 'flex' },
                        },
                    }}
                >
                    <Box
                        component={Link}
                        href={ROUTES.MOVIE + '/' + movieSlug + '/' + GenerateUrl('tap-1', datas.episodeId)}
                    >
                        <SelectHover className="hello123" />
                        <Box
                            component="img"
                            sx={{ width: '100%', height: '100%' }}
                            alt="/hello"
                            src={API_BASE_URL + datas.avatar}
                        />
                        <Typography
                            sx={{
                                position: 'absolute',
                                left: '0',
                                right: '0',
                                bottom: '10%',
                                textAlign: 'center',
                                backgroundColor: '#f009',
                                fontSize: '20px',
                                padding: '5px 0',
                                zIndex: '10',
                                color: '#fff',
                            }}
                        >
                            XEM PHIM
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ marginLeft: '200px', marginBottom: '20px' }}>
                    <Typography
                        sx={{
                            fontSize: '13px',
                            fontWeight: '300',
                            lineHeight: '19.5px',
                            marginBottom: '20px',
                            color: '#ffffffa3',
                            minHeight: '130px',
                            maxHeight: '150px',
                        }}
                    >
                        {datas.description ? datas.description : 'đang cập nhật'}
                    </Typography>
                    <Box
                        sx={{
                            paddingTop: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            borderTop: '1px solid rgba(255, 255, 255, .2)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                paddingRight: '20px',
                                marginRight: '20px',
                                borderRight: '1px solid rgba(255, 255, 255, .2)',
                            }}
                        >
                            <CircularProgressWithLabel value={datas.averageRate ? datas.averageRate : 0} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '0 10px' }}>
                                <Rating
                                    name="half-rating"
                                    max={10}
                                    size="small"
                                    defaultValue={datas.averageRate ? datas.averageRate : 0}
                                    precision={0.5}
                                />
                                <Typography sx={{ fontSize: '10px', fontWeight: '300', lineHeight: '15px' }}>
                                    (Đánh giá {datas.averageRate ? datas.averageRate : 0}/10 từ các thành viên)
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeIcon sx={{ fontSize: '14px', marginRight: '3.2px', color: '#ffffffa3' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: '300', marginRight: '8px' }}>
                                {datas.episode ? datas.episode : '???'}/???
                            </Typography>
                            <CalendarMonthIcon sx={{ fontSize: '14px', marginRight: '3.2px', color: '#ffffffa3' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: '300', marginRight: '8px' }}>
                                {datas.createdAt ? datas.createdAt.split('-')[0] : 'đang cập nhật'}
                            </Typography>
                            <VisibilityIcon sx={{ fontSize: '14px', marginRight: '3.2px', color: '#ffffffa3' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: '300', marginRight: '8px' }}>
                                {datas.countViews ? datas.countViews : 0} lượt xem
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MovieBaner;

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress sx={{ position: 'absolute', color: '#ffffff47' }} variant="determinate" value={100} />
            <CircularProgress sx={{ color: '#b5e745' }} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" sx={{ color: 'text.secondary' }}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}
