import MovieBaner from '@/components/movie/movie.baner';
import MovieInfo from '@/components/movie/movie.info';
import Moviesuggest from '@/components/movie/movie.suggest';

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <MovieBaner />
            <MovieInfo />
            <Moviesuggest />
        </>
    );
};

export default Page;
