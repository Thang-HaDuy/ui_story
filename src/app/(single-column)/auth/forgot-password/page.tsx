import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ForgotPasswordForm from '@/components/auth/forgot-password.form';

const Page = () => {
    return (
        <Box sx={{ backgroundColor: '#263238', paddingY: '40px', paddingX: { xs: '20px', sm: '160px' } }}>
            <Typography
                sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '40px', width: '100%', textAlign: 'center' }}
            >
                QUÊN MẬT KHẨU!
            </Typography>
            <ForgotPasswordForm />
        </Box>
    );
};

export default Page;
