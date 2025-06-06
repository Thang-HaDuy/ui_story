import { Box } from '@mui/material';
import Announcement from './items/announcement/Announcement';
import ListMovieTop from './items/list-movie-top/ListMovieTop';
import { GetListMovieTop } from '@/actions/MovieAction';
import { ITutorialStep } from './items/list-movie-top/MovieItem';
import { Suspense } from 'react';

const Navigation = async () => {
    let data: ITutorialStep[] = [];

    try {
        data = await GetListMovieTop();
    } catch (error) {
        console.error('Error fetching home page data:', error);
    }

    return (
        <Box>
            <Announcement />
            <Suspense fallback={<div>Đang tải ListMovieTop...</div>}>
                <ListMovieTop tutorialSteps={data} />
            </Suspense>
        </Box>
    );
};

export default Navigation;
