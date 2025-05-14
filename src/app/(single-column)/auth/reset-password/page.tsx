import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResetPasswordForm from '@/components/auth/reser-password.form';

const Page = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#263238',
                paddingY: '40px',
            }}
        >
            <Typography sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
                RESET PASSWORD!
            </Typography>
            <ResetPasswordForm />
        </Box>
    );
};

export default Page;
