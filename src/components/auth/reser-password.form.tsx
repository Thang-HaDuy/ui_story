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
import ROUTES from '@/constants/routes';
import { useSession } from 'next-auth/react';
import { sendRequest } from '@/utils/api';
import { useSearchParams, useRouter } from 'next/navigation';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';

const ResetPasswordForm = () => {
    const [formValues, setFormValues] = useState({ password: '', confirmPassword: '' });
    const [formErrors, setFormErrors] = useState({ password: false, confirmPassword: false });

    const [serverError, setServerError] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

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
        const email = searchParams.get('email');
        const token = searchParams.get('token');
        console.log(token);

        if (Object.values(formErrors).some((error) => error)) {
            setServerError('Vui lòng kiểm tra lại thông tin!');
            return;
        }
        if (formValues.password.trim() != formValues.confirmPassword.trim()) {
            setServerError('Mật khẩu không trùng khớp!');
            return;
        }
        if (email == null || token == null) {
            setServerError('Đường link không hợp lệ!');
            return;
        }
        try {
            const res = await sendRequest<IBackendRes<ILogin>>({
                method: 'POST',
                url: `${API_BASE_URL}${API_ENDPOINTS.RESET_PASSWORD}`,
                body: {
                    password: formValues.password,
                    token: token,
                    email: email,
                },
            });
            if (res.statusCode == 401) {
                setServerError('Thông tin không hợp lệ!');
                return;
            }

            router.push(ROUTES.LOGIN);
        } catch (e) {
            setServerError('Server không phẩn hồi');
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
                    marginBottom: '16px',
                    width: '100%',
                }}
            >
                <TextField
                    placeholder="Nhập lại mật khẩu"
                    variant="standard"
                    name="confirmPassword"
                    type="password"
                    fullWidth
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
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginBottom: '16px',
                    width: '100%',
                    alignItems: 'end',
                }}
            >
                <Box
                    component={Link}
                    href={ROUTES.REGISTER}
                    sx={{
                        color: '#3b5998',
                        textDecoration: 'none',
                    }}
                >
                    Tạo Tải Khỏan?
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
                    Xác Nhận
                </Button>
            </Box>
        </Box>
    );
};

export default ResetPasswordForm;
