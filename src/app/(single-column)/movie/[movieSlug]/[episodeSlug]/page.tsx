import { GetVideoOfEpisode } from '@/actions/EpisodeAction';
import { GetEpisodeListData, GetMovieBanerData, GetMovieInfoData, GetMoviesuggestData } from '@/actions/MovieAction';
import EpisodeList, { IEpisodeListData } from '@/components/episode/episode.list';
import MovieEpisode from '@/components/episode/episode.video';
import MovieBaner, { IMovieBanerData } from '@/components/movie/movie.baner';
import Moviesuggest from '@/components/movie/movie.suggest';
import { ITutorialStep } from '@/components/ui/navigation/items/list-movie-top/MovieItem';

const Page = async ({ params }: { params: { movieSlug: string; episodeSlug: string } }) => {
    const episodeId = params.episodeSlug.split('_')[1];
    let movieid = params.movieSlug.split('_')[1];

    let movieBanerData: IMovieBanerData[],
        moviesuggestData: ITutorialStep[],
        episodeListData: IEpisodeListData[],
        videoOfEpisode;
    try {
        [videoOfEpisode, episodeListData, movieBanerData, moviesuggestData] = await Promise.all([
            GetVideoOfEpisode(episodeId),
            GetEpisodeListData(movieid),
            GetMovieBanerData(movieid),
            GetMoviesuggestData(movieid),
        ]);
    } catch (error) {
        movieBanerData = [];
        moviesuggestData = [];
        episodeListData = [];
        videoOfEpisode = '';
        console.error('Error fetching home page data:', error);
    }
    return (
        <>
            <MovieEpisode url={videoOfEpisode} />
            <EpisodeList episodeId={episodeId} episodeListData={episodeListData} movieSlug={params.movieSlug} />

            <MovieBaner datas={movieBanerData[0]} movieSlug={params.movieSlug} />
            <Moviesuggest data={moviesuggestData} />
        </>
    );
};

export default Page;
