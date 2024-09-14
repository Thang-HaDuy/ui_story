import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase from '@mui/material/InputBase';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Link from 'next/link';

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
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    paddingX: { xs: '20px', sm: '160px' },
                }}
            >
                <Typography sx={{ fontSize: '30px', fontWeight: '700', marginBottom: '40px' }}>ĐĂNG NHẬP!</Typography>

                <Box
                    sx={{
                        marginBottom: '16px',
                        width: '100%',
                    }}
                >
                    <InputBase
                        placeholder="Email đăng nhập"
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
                            width: '100%',
                            paddingY: '6px',
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginBottom: '16px',
                        width: '100%',
                        alignItems: 'end',
                    }}
                >
                    <Box
                        component={Link}
                        href="/forgot-password"
                        sx={{
                            color: '#3b5998',
                            textDecoration: 'none',
                        }}
                    >
                        Quên mật khẩu?
                    </Box>
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
                        Đăng nhập
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
                        href="/register"
                    >
                        Đăng ký
                    </Box>{' '}
                    ngay!
                </Box>
            </Box>
        </Box>
    );
};

export default Page;
