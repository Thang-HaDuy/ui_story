import Rating from '@/components/ui/shared/Rating';
import SelectHover from '@/components/ui/shared/SelectHover';
import TotalEpisode from '@/components/ui/shared/TotalEpisode';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageMovie from '@/components/ui/shared/ImageMovie';
import ROUTES from '@/constants/routes';
import { API_BASE_URL } from '@/constants/api';

export interface ITutorialStep {
    id: string;
    name: string;
    avatar: string;
    description: string;
    episode: string;
    averageRating: number;
    className: string;
}
const MovieItem = ({ step }: { step: ITutorialStep }) => {
    return (
        <Box component={Link} href={ROUTES.MOVIE + '/' + step.id}>
            <Box
                sx={{
                    marginX: '9.6px',
                    position: 'relative',
                    '&:hover': {
                        [`& .${step.className}`]: { display: 'flex' },
                    },
                }}
            >
                <ImageMovie src={API_BASE_URL + step.avatar} alt={step.description} />
                <Typography
                    sx={{
                        color: '#fff',
                        zIndex: '5',
                        position: 'absolute',
                        bottom: '0px',
                        left: '0',
                        right: '0',
                        padding: '10px',
                        paddingTop: '50px',
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: '16px',
                        textAlign: 'center',
                        background: 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%)',
                    }}
                >
                    {step.description}
                </Typography>
                <TotalEpisode episode={step.episode} />
                <Rating number={step.averageRating} />
                <SelectHover className={step.className} />
            </Box>
        </Box>
    );
};

export default MovieItem;
