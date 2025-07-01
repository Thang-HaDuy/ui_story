import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Link from 'next/link';
import { API_BASE_URL } from '@/constants/api';
import ROUTES from '@/constants/routes';
import { GenerateUrl } from '@/utils/helper';

export interface ISuggest {
    avatar: string;
    name: string;
    id: string;
    countEpisodes: number;
}

const Suggest = ({ suggestData }: { suggestData: ISuggest }) => {
    return (
        <MenuItem sx={{ padding: '5px 10px', borderBottom: '1px solid #222e33' }}>
            <Box
                component={Link}
                href={ROUTES.MOVIE + '/' + GenerateUrl(suggestData.name, suggestData.id)}
                sx={{ display: 'flex', textDecoration: 'none' }}
            >
                <Box sx={{ lineHeight: '0', width: '50px', height: '60px', marginTop: '2px' }}>
                    <img style={{ width: '100%' }} src={API_BASE_URL + suggestData.avatar} alt="My Image" />
                </Box>
                <Box sx={{ textDecoration: 'none', width: '100%', paddingLeft: '10px' }}>
                    <Typography
                        sx={{
                            color: '#969696',
                            fontSize: '13px',
                            '&:hover': { opacity: '0.5' },
                            whiteSpace: 'normal',
                            fontWeight: '700',
                        }}
                    >
                        {suggestData.name}
                    </Typography>
                    <Typography sx={{ color: '#888', fontSize: '13px', '&:hover': { opacity: '0.5' } }}>
                        Tập {suggestData.countEpisodes} vietSub
                    </Typography>
                </Box>
            </Box>
        </MenuItem>
    );
};

export default Suggest;
