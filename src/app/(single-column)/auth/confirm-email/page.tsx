import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { sendRequest } from '@/utils/api';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { Suspense } from 'react';

type IProp = {
    searchParams: { code?: string; email?: string };
};
const Page = async ({ searchParams }: IProp) => {
    const code = searchParams.code;
    const email = searchParams.email;

    // Kiểm tra nếu thiếu code hoặc email
    if (!code || !email) {
        return (
            <Box sx={{ backgroundColor: '#263238', paddingY: '40px' }}>
                <Typography sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
                    Xác thực thất bại
                </Typography>
                <Typography sx={{ fontSize: '16px', textAlign: 'center', color: 'red' }}>
                    Thiếu mã xác thực hoặc email
                </Typography>
            </Box>
        );
    }

    // Gọi API xác thực
    let result;
    try {
        const res = await sendRequest<IBackendRes<[]>>({
            method: 'POST',
            url: `${API_BASE_URL}${API_ENDPOINTS.COMFIRM_EMAIL}`,
            body: {
                code,
                email,
            },
        });
        result = res.statusCode == 200;
    } catch (e) {
        result = false;
    }

    return (
        <Suspense fallback={<Typography>Đang tải...</Typography>}>
            <Box
                sx={{
                    backgroundColor: '#263238',
                    paddingY: '40px',
                }}
            >
                {result ? (
                    <Typography sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
                        Xác thực thành công email
                    </Typography>
                ) : (
                    <Typography sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
                        Xác thực thất bại email
                    </Typography>
                )}
            </Box>
        </Suspense>
    );
};

export default Page;
