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
                ĐĂNG KÝ!
            </Typography>
            <Box
                sx={{
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <InputBase
                    placeholder="Tài khoản"
                    startAdornment={
                        <InputAdornment position="start">
                            <PersonIcon
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
            <Box
                sx={{
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <InputBase
                    placeholder="Mật khẩu"
                    startAdornment={
                        <InputAdornment position="start">
                            <LockIcon
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
            <Box
                sx={{
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <InputBase
                    placeholder="nhập lại mật khẩu"
                    startAdornment={
                        <InputAdornment position="start">
                            <LockIcon
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
            <Box sx={{ width: '100%', textAlign: 'end', paddingRight: '10%', marginBottom: '10px', marginTop: '20px' }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        textTransform: 'uppercase',
                        color: '#333',
                        fontWeight: '600',
                        paddingX: '16px',
                        width: '150px',
                        height: '45px',
                    }}
                >
                    Đăng ký
                </Button>
            </Box>
            <Box
                sx={{
                    color: '#999',
                    width: '100%',
                    textAlign: 'start',
                    fontWeight: '300',
                    fontSize: '13px',
                    lineHeight: '19.5px',
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
                    href="/login"
                >
                    Đăng nhập
                </Box>{' '}
                ngay!
            </Box>
        </Box>
    );
};

export default Page;
