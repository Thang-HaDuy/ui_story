import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import { Grid } from '@mui/material';
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { GenerateUrl } from '@/utils/helper';

export interface IEpisodeListData {
    id: string;
    number: number;
}
export interface IEpisodeList {
    episodeListData: IEpisodeListData[];
    movieSlug: string;
    episodeId: string;
}
const EpisodeList = (prop: IEpisodeList) => {
    const { movieSlug, episodeId, episodeListData } = prop;

    return (
        <Box sx={{ backgroundColor: '#181d1f', padding: '10px', marginBottom: '20px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <ElectricalServicesIcon sx={{ marginRight: '10px' }} />
                <Typography>AnimeVSub</Typography>
            </Box>
            <Grid container sx={{ paddingX: '20px' }} spacing={1}>
                {episodeListData.map((e) => (
                    <Grid item key={e.id} xs={1}>
                        <Box
                            component={Link}
                            href={ROUTES.MOVIE + '/' + movieSlug + '/' + GenerateUrl('tap-1', e.id)}
                            sx={{
                                display: 'block',
                                backgroundColor: episodeId == e.id ? '#e62117' : '#3b3b3b',
                                border: episodeId == e.id ? '2px solid #fff' : 'none',
                                height: '42px',
                                width: '100%',
                                textDecoration: 'none',
                                color: '#fff',
                                borderRadius: '10px',
                            }}
                        >
                            <Typography
                                sx={{
                                    height: '100%',
                                    width: '100%',
                                    textAlign: 'center',
                                    lineHeight: '2.7',
                                    fontWeight: '700',
                                }}
                            >
                                {e.number}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EpisodeList;
