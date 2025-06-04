import { Box } from '@mui/material';
import Announcement from './items/announcement/Announcement';
import ListMovieTop from './items/list-movie-top/ListMovieTop';
import { GetListMovieTop } from '@/actions/MovieAction';
import { ITutorialStep } from './items/list-movie-top/MovieItem';

const Navigation = async () => {
    let data;

    try {
        data = await GetListMovieTop();
    } catch (e) {
        console.log(e);
    }

    if (!data) {
        return (
            <Box>
                <Announcement />
            </Box>
        );
    }

    return (
        <Box>
            <Announcement />
            <ListMovieTop tutorialSteps={data} />
        </Box>
    );
};

export default Navigation;

// const tutorialSteps: ITutorialStep[] = [
//     {
//         label: 'San Francisco 10',
//         imgPath: '/02yvy2ix.webp',
//         text: 'Cuộc Sống Thảnh Thơi Tại Dị Giới Gian Lận Của Cựu Ứng',
//         episode: 5,
//         rating: 4.3,
//         className: 'hoverEffect31',
//     },
// ];
