import Box from '@mui/material/Box';
import RandomAnime from './item/RandomAnime';
import JoinGround from './item/JoinGround';
import AnimeNewUpdate from './item/anime-new-update/AnimeNewUpdate';
import AnimeHot from './item/anime-hot/AnimeHot';
import SuggestedTagList from './item/suggested-tag-list/SuggestedTagList';
import { getMinimalAnimeUpdates } from '@/actions/MovieAction';
import { INewAnime } from './item/anime-new-update/ItemAnime';

const Sidebar = async () => {
    let updateData: INewAnime[] = [];

    try {
        [updateData] = await Promise.all([
            getMinimalAnimeUpdates(),
            // getAnimeUpdate(),
        ]);
    } catch (error) {
        console.error('Error fetching home page data:', error);
        // Có thể trả về trang lỗi hoặc thông báo
    }

    return (
        <>
            <RandomAnime />
            <JoinGround />
            <AnimeNewUpdate newAnime={updateData} />
            <AnimeHot />
            <SuggestedTagList />
        </>
    );
};

export default Sidebar;
