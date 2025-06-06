'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';
import { useSession } from 'next-auth/react';

const LoginForm = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const [formErrors, setFormErrors] = useState({ email: false, password: false });

    const [serverError, setServerError] = useState('');
    const router = useRouter();

    const handleBlur = (field: string) => {
        setFormErrors((prev) => ({
            ...prev,
            [field]: formValues[field as keyof typeof formValues].trim() === '',
        }));
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (Object.values(formErrors).some((error) => error)) {
            setServerError('Vui lòng kiểm tra lại thông tin!');
            return;
        }
        const data = await signIn('credentials', { ...formValues, redirect: false });
        if ((data as any).error == null) {
            router.push(ROUTES.HOME);
        } else {
            setServerError((data as any).code);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                paddingX: { xs: '20px', sm: '160px' },
            }}
        >
            {serverError && (
                <Box
                    sx={{
                        marginBottom: '16px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#ffd4d4',
                        padding: '15px',
                        borderRadius: '4px',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#333',
                            width: '100%',
                        }}
                    >
                        <Box component="span" sx={{ fontWeight: '700' }}>
                            Lỗi:{' '}
                        </Box>
                        {serverError}
                    </Typography>
                    <CloseIcon onClick={() => setServerError('')} sx={{ color: '#af9f9f', fontWeight: '500' }} />
                </Box>
            )}
            <Box
                sx={{
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <TextField
                    placeholder="Email đăng nhập"
                    variant="standard"
                    name="email"
                    fullWidth
                    value={formValues.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    error={formErrors.email}
                    helperText={formErrors.email ? 'Không được để trống' : ''}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon sx={{ color: '#999' }} />
                            </InputAdornment>
                        ),
                        disableUnderline: false, // nếu bạn muốn có dòng gạch dưới
                    }}
                    sx={{
                        '& .MuiInputBase-root': {
                            paddingY: '6px',
                            borderBottom: '1px solid #3f4a50',
                        },
                    }}
                />
            </Box>
            <Box
                sx={{
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <TextField
                    placeholder="Mật khẩu"
                    variant="standard"
                    name="password"
                    type="password"
                    fullWidth
                    value={formValues.password}
                    onChange={handleChange}
                    onBlur={() => handleBlur('password')}
                    error={formErrors.password}
                    helperText={formErrors.password ? 'Không được để trống' : ''}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon sx={{ color: '#999' }} />
                            </InputAdornment>
                        ),
                        disableUnderline: false, // có dòng gạch dưới
                    }}
                    sx={{
                        '& .MuiInputBase-root': {
                            paddingY: '6px',
                            borderBottom: '1px solid #3f4a50',
                        },
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
                    href={ROUTES.FORGOT_PASSWORD}
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
        </Box>
    );
};

export default LoginForm;
