import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Link from 'next/link';

const Page = () => {
    return (
        <Box
            component="form"
            sx={{ backgroundColor: '#263238', paddingY: '40px', paddingX: { xs: '20px', sm: '160px' } }}
        >
            <Typography
                sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '40px', width: '100%', textAlign: 'center' }}
            >
                QUÊN MẬT KHẨU!
            </Typography>
            <Box
                sx={{
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <InputBase
                    placeholder="Email"
                    startAdornment={
                        <InputAdornment position="start">
                            <EmailIcon
                                sx={{
                                    color: '#999',
                                }}
                            />
                        </InputAdornment>
                    }
                    sx={{
                        borderBottom: '1px solid #3f4a50',
                        paddingY: '6px',
                        width: '100%',
                    }}
                />
            </Box>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        textTransform: 'uppercase',
                        color: '#333',
                        fontWeight: '600',
                        padding: '6px 40px',
                        height: '45px',
                        backgroundColor: '#f3cb2b',
                    }}
                >
                    Gửi
                </Button>
            </Box>
        </Box>
    );
};

export default Page;
