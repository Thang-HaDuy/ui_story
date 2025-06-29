import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SelectHover from '../ui/shared/SelectHover';

const MovieBaner = () => {
    return (
        <Box
            sx={{
                width: '100%',
                padding: '20px',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                backgroundImage: "url('/slide.webp')",
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
                        One Piece - Đảo Hải Tặc
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
                    <SelectHover className="hello123" />
                    <Box component="img" sx={{ width: '100%', height: '100%' }} alt="/hello" src="/name1.jpg" />
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
                        }}
                    >
                        XEM PHIM
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: '200px', marginBottom: '20px' }}>
                    <Typography
                        sx={{
                            fontSize: '13px',
                            fontWeight: '300',
                            lineHeight: '19.5px',
                            marginBottom: '20px',
                            color: '#ffffffa3',
                        }}
                    >
                        Anime được phát sóng lần đầu tiên vào năm 1999 và nhanh chóng trở thành một trong những series
                        anime phổ biến nhất trên thế giới. Câu chuyện xoay quanh Monkey D. Luffy, một chàng trai trẻ với
                        giấc mơ trở thành Vua Hải Tặc. Luffy, người có khả năng co giãn như cao su sau khi ăn nhầm Trái
                        Ác Quỷ, lãnh đạo nhóm Hải Tặc Mũ Rơm đi khắp Grand Line để tìm kiếm kho báu huyền thoại One
                        Piece và theo đuổi giấc mơ của mình. Series nổi tiếng với cốt truyện phong phú, nhân vật đa
                        dạng, và những pha hành động hấp dẫn
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
                            <CircularProgressWithLabel value={60} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', margin: '0 10px' }}>
                                <Rating name="half-rating" max={10} size="small" defaultValue={2.5} precision={0.5} />
                                <Typography sx={{ fontSize: '10px', fontWeight: '300', lineHeight: '15px' }}>
                                    (Đánh giá 9.2/10 từ 3947 thành viên)
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccessTimeIcon sx={{ fontSize: '14px', marginRight: '3.2px', color: '#ffffffa3' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: '300', marginRight: '8px' }}>
                                12/???
                            </Typography>
                            <CalendarMonthIcon sx={{ fontSize: '14px', marginRight: '3.2px', color: '#ffffffa3' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: '300', marginRight: '8px' }}>
                                2025
                            </Typography>
                            <VisibilityIcon sx={{ fontSize: '14px', marginRight: '3.2px', color: '#ffffffa3' }} />
                            <Typography sx={{ fontSize: '12px', fontWeight: '300', marginRight: '8px' }}>
                                38 lượt xem
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
