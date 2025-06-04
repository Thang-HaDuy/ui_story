'use client';

import { Gender, IInfoContent } from './info.content';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { sendRequestFile } from '@/utils/api';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { useSession } from 'next-auth/react';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type IFormContent = Pick<IInfoContent, 'userName' | 'email' | 'gender'>;

const InfoForm = (prop: IFormContent) => {
    const { userName, email, gender } = prop;
    const { data: session } = useSession();
    const [formValues, setFormValues] = useState<{
        gender: Gender;
        password: string;
        avatar: File | null;
    }>({ gender: gender, password: '', avatar: null });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await sendRequestFile<IBackendRes<IInfoContent>>({
                method: 'PUT',
                url: `${API_BASE_URL}${API_ENDPOINTS.UPDATE_USER}`,
                body: { ...formValues },
                headers: {
                    Authorization: `Bearer ${session?.user.access_token}`,
                },
            });
        } catch (e) {
            throw new Error('Lỗi server!');
        }
    };
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Box>
            <Typography
                component="h1"
                sx={{
                    fontSize: '30px',
                    fontWeight: '700',
                    marginBottom: '40px',
                    textTransform: 'uppercase',
                }}
            >
                Thông Tin Tài Khoản
            </Typography>
            <div>
                <Button onClick={handleClick}>Open Snackbar</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                        This is a success Alert inside a Snackbar!
                    </Alert>
                </Snackbar>
            </div>
            <Box component="form" sx={{ padding: 2 }} onSubmit={handleSubmit}>
                <Grid container spacing={6} alignItems="center" sx={{ marginBottom: 2 }}>
                    <Grid item xs={3}>
                        <Typography sx={{ fontWeight: 700, color: '#999' }}>Email</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography>{email}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ fontWeight: 700, color: '#999' }}>Username</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography>{userName}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ fontWeight: 700, color: '#999' }}>Gender</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <RadioGroup
                            name="gender"
                            row
                            value={formValues.gender}
                            onChange={(e) =>
                                setFormValues((prev) => ({
                                    ...prev,
                                    gender: Number(e.target.value) as Gender,
                                }))
                            }
                        >
                            <FormControlLabel value={Gender.Male} control={<Radio />} label="Male" />
                            <FormControlLabel value={Gender.Female} control={<Radio />} label="Female" />
                            <FormControlLabel value={Gender.Other} control={<Radio />} label="Other" />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ fontWeight: 700, color: '#999' }}>Password</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            size="small"
                            placeholder="Để trống nếu không muốn thay đổi"
                            value={formValues.password}
                            onChange={(e) => {
                                setFormValues((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }));
                            }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Typography sx={{ fontWeight: 700, color: '#999' }}>avatar</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            type="file"
                            size="small"
                            onChange={(e) => {
                                const file = (e.target as HTMLInputElement).files?.[0] || null;
                                setFormValues((prev) => ({
                                    ...prev,
                                    avatar: file,
                                }));
                            }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'left', marginTop: 3 }}>
                    <Button type="submit" variant="contained">
                        Cập Nhật
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default InfoForm;
