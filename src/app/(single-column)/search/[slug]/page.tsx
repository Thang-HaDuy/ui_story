import { SearchMovie } from '@/actions/MovieAction';
import { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';
import SearchContainer from '@/components/search/search.container';

const Page = async ({ params }: { params: { slug: string } }) => {
    let searchData: IModelPaginate<IAnimeUpdateItem[]>;
    try {
        searchData = await SearchMovie(params.slug);
    } catch (error) {
        console.error('Error fetching home page data:', error);
        return {};
    }
    return (
        <>
            <SearchContainer searchData={searchData} slug={params.slug} />
        </>
    );
};

export default Page;
