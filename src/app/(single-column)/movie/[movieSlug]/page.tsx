import { GetMovieBanerData, GetMovieInfoData, GetMoviesuggestData } from '@/actions/MovieAction';
import MovieBaner, { IMovieBanerData, IMovieBanerProp } from '@/components/movie/movie.baner';
import MovieInfo, { IMovieInfoProp } from '@/components/movie/movie.info';
import Moviesuggest from '@/components/movie/movie.suggest';
import { ITutorialStep } from '@/components/ui/navigation/items/list-movie-top/MovieItem';

const Page = async ({ params }: { params: { movieSlug: string } }) => {
    let id = params.movieSlug.split('_')[1];

    let movieBanerData: IMovieBanerData[],
        movieInfoData: IMovieInfoProp[],
        moviesuggestData: ITutorialStep[] = [];
    try {
        [movieBanerData, movieInfoData, moviesuggestData] = await Promise.all([
            GetMovieBanerData(id),
            GetMovieInfoData(id),
            GetMoviesuggestData(id),
        ]);
    } catch (error) {
        movieBanerData = [];
        movieInfoData = [];
        moviesuggestData = [];
        console.error('Error fetching home page data:', error);
    }
    return (
        <>
            <MovieBaner datas={movieBanerData[0]} movieSlug={params.movieSlug} />
            <MovieInfo {...movieInfoData[0]} />
            <Moviesuggest data={moviesuggestData} />
        </>
    );
};

export default Page;
