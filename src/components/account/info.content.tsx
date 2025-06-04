import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoForm from './info.form';

export interface IInfoContent {
    avatar: string | null;
    userName: string;
    createdAt: string;
    email: string;
    gender: Gender;
}

const InfoContent = (prop: IInfoContent) => {
    const { avatar, userName, createdAt, email, gender } = prop;
    return (
        <Box
            sx={{
                padding: '40px 20px',
                backgroundColor: '#263238',
            }}
        >
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box component="img" src={avatar ? avatar : '/user-image.webp'} alt="user-image.webp" />
                        <Typography
                            sx={{
                                fontSize: '16px',
                                fontWeight: '600',
                                marginBottom: '7px',
                                whiteSpace: 'nowrap',
                                overflow: 'Hidden',
                                textOverflow: 'ellipsis',
                                textAlign: 'center',
                            }}
                        >
                            {userName}
                        </Typography>
                        <Typography
                            sx={{
                                color: '#f6ce4c',
                                textTransform: 'uppercase',
                                fontSize: '18px',
                                fontWeight: '600',
                                textAlign: 'center',
                            }}
                        >
                            Tham Gia: {createdAt}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <InfoForm userName={userName} email={email} gender={gender} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default InfoContent;

export enum Gender {
    Other = 0,
    Male = 1,
    Female = 2,
}
