import { getAnimeUpdate, getNominatedAnime, getSlideAnimeTop, getUpcommingAnime } from '@/actions/MovieAction';
import NewAnimeUpdate from '@/components/home/anime-update/NewAnimeUpdate';
import NominatedAnime from '@/components/home/nominated-anime/NominatedAnime';
import SlideAnimeTop from '@/components/home/slide-anime-top/SlideAnimeTop';
import { IStep } from '@/components/home/slide-anime-top/SlideItem';
import UpcommingAnime from '@/components/home/upcomming-anime/UpcommingAnime';
import { Suspense } from 'react';

export const metadata = {
    title: 'Anime Vietsub Online',
};

export const revalidate = 1;

const Page = async () => {
    let slideData: IStep[] = [],
        updateData = [],
        upcomingData = [],
        nominatedData = [];
    try {
        [slideData, updateData, upcomingData, nominatedData] = await Promise.all([
            getSlideAnimeTop(),
            getAnimeUpdate(),
            getUpcommingAnime(),
            getNominatedAnime(),
        ]);
    } catch (error) {
        console.error('Error fetching home page data:', error);
        // Có thể trả về trang lỗi hoặc thông báo
    }
    return (
        <>
            <Suspense fallback={<div>Đang tải SlideAnimeTop...</div>}>
                <SlideAnimeTop tutorialSteps={slideData} />
            </Suspense>
            <Suspense fallback={<div>Đang tải AnimeUpdate...</div>}>
                <NewAnimeUpdate />
            </Suspense>
            <Suspense fallback={<div>Đang tải UpcommingAnime...</div>}>
                <UpcommingAnime />
            </Suspense>
            <Suspense fallback={<div>Đang tải NominatedAnime...</div>}>
                <NominatedAnime />
            </Suspense>
        </>
    );
};

export default Page;
