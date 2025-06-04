'use client';

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { sendRequest } from '@/utils/api';
import { signIn } from 'next-auth/react';
import ROUTES from '@/constants/routes';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';

const RegisterForm = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '', confirmPassword: '', username: '' });
    const [formErrors, setFormErrors] = useState({
        email: false,
        password: false,
        confirmPassword: false,
        username: false,
    });

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
        if (formValues.password.trim() != formValues.confirmPassword.trim()) {
            setServerError('Mật khẩu không trùng khớp!');
            return;
        }
        try {
            const res = await sendRequest<IBackendRes<ILogin>>({
                method: 'POST',
                url: `${API_BASE_URL}${API_ENDPOINTS.REGISTER}`,
                body: { ...formValues },
            });
            if (res.statusCode == 401) {
                setServerError('Thông tin không hợp lệ!');
                return;
            }
            const data = await signIn('credentials', {
                email: formValues.email,
                password: formValues.password,
                redirect: false,
            });

            if ((data as any).error == null) {
                router.push(ROUTES.HOME);
            } else {
                setServerError((data as any).code);
            }
        } catch (e) {
            setServerError('Server không phẩn hồi');
        }
    };
    return (
        <Box component="form" onSubmit={handleSubmit}>
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
            <Box sx={{ marginBottom: '16px', width: '100%' }}>
                <TextField
                    fullWidth
                    placeholder="Tài khoản"
                    variant="standard"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    onBlur={() => handleBlur('username')}
                    error={formErrors.username}
                    helperText={formErrors.username ? 'Không được để trống' : ''}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonIcon sx={{ color: '#999' }} />
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                    sx={{
                        borderBottom: '1px solid #3f4a50',
                        paddingY: '6px',
                    }}
                />
            </Box>

            <Box sx={{ marginBottom: '16px', width: '100%' }}>
                <TextField
                    fullWidth
                    type="password"
                    placeholder="Mật khẩu"
                    variant="standard"
                    name="password"
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
                        disableUnderline: true,
                    }}
                    sx={{
                        borderBottom: '1px solid #3f4a50',
                        paddingY: '6px',
                    }}
                />
            </Box>

            <Box sx={{ marginBottom: '16px', width: '100%' }}>
                <TextField
                    fullWidth
                    type="comfirm password"
                    placeholder="Nhập lại mật khẩu"
                    variant="standard"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    onBlur={() => handleBlur('confirmPassword')}
                    error={formErrors.confirmPassword}
                    helperText={formErrors.confirmPassword ? 'Không được để trống' : ''}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon sx={{ color: '#999' }} />
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                    sx={{
                        borderBottom: '1px solid #3f4a50',
                        paddingY: '6px',
                    }}
                />
            </Box>

            <Box sx={{ marginBottom: '16px', width: '100%' }}>
                <TextField
                    fullWidth
                    type="email"
                    placeholder="Email"
                    variant="standard"
                    name="email"
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
                        disableUnderline: true,
                    }}
                    sx={{
                        borderBottom: '1px solid #3f4a50',
                        paddingY: '6px',
                    }}
                />
            </Box>

            <Box
                sx={{
                    width: '100%',
                    textAlign: 'end',
                    paddingRight: '10%',
                    marginBottom: '10px',
                    marginTop: '20px',
                }}
            >
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
        </Box>
    );
};

export default RegisterForm;
