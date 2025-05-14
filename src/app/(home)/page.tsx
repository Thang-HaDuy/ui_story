import AnimeUpdate from '@/components/home/anime-update/AnimeUpdate';
import NominatedAnime from '@/components/home/nominated-anime/NominatedAnime';
import SlideAnimeTop from '@/components/home/slide-anime-top/SlideAnimeTop';
import UpcommingAnime from '@/components/home/upcomming-anime/UpcommingAnime';

export const metadata = {
    title: 'Anime Vietsub Online',
};

const Page = () => {
    return (
        <>
            <SlideAnimeTop />
            <AnimeUpdate />
            <UpcommingAnime />
            <NominatedAnime />
        </>
    );
};

export default Page;
