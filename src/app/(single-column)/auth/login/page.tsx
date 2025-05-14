import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LoginForm from '@/components/auth/login.form';
import Link from 'next/link';
import ROUTES from '@/constants/routes';

const Page = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#263238',
                paddingY: '40px',
            }}
        >
            <Typography
                sx={{ backgroundColor: '#d43939', padding: '5px 10px', marginBottom: '10px', width: 'max-content' }}
            >
                <Box component="span" sx={{ fontWeight: '700' }}>
                    LƯU Ý:{' '}
                </Box>
                ĐĂNG NHẬP TÀI KHOẢN GIÚP LƯU LỊCH SỬ XEM VÀ NHẬN THÔNG BÁO ANIME MỚI TỐT NHẤT
            </Typography>
            <Typography sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
                ĐĂNG NHẬP!
            </Typography>
            <LoginForm />
            <Box
                sx={{
                    color: '#999',
                    width: '100%',
                    textAlign: 'center',
                    fontWeight: '300',
                    fontSize: '13px',
                    lineHeight: '19.5px',
                    padding: '15px',
                }}
            >
                Chưa có tài khoản?{' '}
                <Box
                    component={Link}
                    sx={{
                        backgroundColor: '#f3cb2b',
                        textDecoration: 'none',
                        color: '#000',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        padding: '6px 15px',
                        borderRadius: '20px',
                        fontSize: '12px ',
                    }}
                    href={ROUTES.REGISTER}
                >
                    Đăng ký
                </Box>{' '}
                ngay!
            </Box>
        </Box>
    );
};

export default Page;
