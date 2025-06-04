'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { sendRequest } from '@/utils/api';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [serverError, setServerError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleBlur = () => {
        setEmailError(email.trim() === '');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (emailError) {
            setServerError('Vui lòng kiểm tra lại thông tin!');
            return;
        }
        try {
            const res = await sendRequest<IBackendRes<any>>({
                method: 'POST',
                url: `${API_BASE_URL}${API_ENDPOINTS.FORGOT_PASSWORD}`,
                body: {
                    email,
                },
                headers: {
                    'X-Subdomain': `${window.location.protocol}//${window.location.host}`,
                },
            });
            if (res.statusCode == 401) {
                setServerError('Thông tin không hợp lệ!');
                return;
            }
        } catch (e) {
            setServerError('Server không phẩn hồi');
        }
    };
    return (
        <Box onSubmit={handleSubmit} component="form">
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
                    placeholder="email"
                    variant="standard"
                    name="email"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={emailError}
                    helperText={emailError ? 'Email không được để trống' : ''}
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

export default ForgotPasswordForm;
