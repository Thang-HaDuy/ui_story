import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Page = () => {
    return (
        <Box>
            <Typography sx={{ backgroundColor: '#d43939', padding: '5px 10px', marginBottom: '10px' }}>
                <Box component="span" sx={{ fontWeight: '700' }}>
                    Lưu ý:{' '}
                </Box>
                Lịch chiếu phim bên dưới chỉ mang tính chất tương đối, đây là thời gian ra tập phim Raw bên nhật, thời
                gian ra vietsub phụ thuộc vào nhóm dịch, có thể chỉ sau vài giờ hoặc vài ngày thậm chí vài năm nếu phim
                đó không ai dịch, mong các bạn không phàn nàn và thắc mắc
            </Typography>
        </Box>
    );
};

export default Page;
