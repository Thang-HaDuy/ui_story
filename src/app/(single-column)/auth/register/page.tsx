import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import RegisterForm from '@/components/auth/register.form';
import ROUTES from '@/constants/routes';

const Page = async () => {
    return (
        <Box sx={{ backgroundColor: '#263238', paddingY: '40px', paddingX: { xs: '20px', sm: '160px' } }}>
            <Typography
                sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '40px', width: '100%', textAlign: 'center' }}
            >
                ĐĂNG KÝ!
            </Typography>
            <RegisterForm />
            <Box
                sx={{
                    color: '#999',
                    width: '100%',
                    textAlign: 'start',
                    fontWeight: '300',
                    fontSize: '13px',
                    lineHeight: '19.5px',
                    marginTop: '-30px',
                }}
            >
                Đã có tài khoản?{' '}
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
                    href={ROUTES.LOGIN}
                >
                    Đăng nhập
                </Box>{' '}
                ngay!
            </Box>
        </Box>
    );
};

export default Page;
