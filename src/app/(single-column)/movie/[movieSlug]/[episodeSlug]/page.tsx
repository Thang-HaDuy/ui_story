import EpisodeList, { IEpisodeListData } from '@/components/episode/episode.list';
import MovieEpisode from '@/components/episode/episode.video';
import MovieBaner from '@/components/movie/movie.baner';
import Moviesuggest from '@/components/movie/movie.suggest';

const Page = ({ params }: { params: { movieSlug: string; episodeSlug: string } }) => {
    const episodeId = params.episodeSlug.split('_')[1];
    const episodeListData: IEpisodeListData[] = [
        {
            id: '123',
            number: 1,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 2,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 3,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 4,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 5,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 6,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 7,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 8,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 9,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 10,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 11,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 12,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 13,
        },
        {
            id: 'ghjhgfdsdfg',
            number: 14,
        },
    ];
    return (
        <>
            <MovieEpisode url="Streaming/2025/6/a91622d2-efda-4b04-b0b3-2023108b4880.m3u8" />
            <EpisodeList episodeId={episodeId} episodeListData={episodeListData} movieSlug={params.movieSlug} />
            <MovieBaner />
            <Moviesuggest />
        </>
    );
};

export default Page;
