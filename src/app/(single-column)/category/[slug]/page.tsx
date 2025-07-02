import { GetMovieByCategory } from '@/actions/MovieAction';
import CategoryContainer from '@/components/category/category.container';
import { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';

const Page = async ({ params }: { params: { slug: string } }) => {
    let categoryData: IModelPaginate<IAnimeUpdateItem[]>;
    try {
        categoryData = await GetMovieByCategory(params.slug);
    } catch (error) {
        console.error('Error fetching home page data:', error);
        return {};
    }
    return (
        <>
            <CategoryContainer categoryData={categoryData} slug={params.slug} />
        </>
    );
};

export default Page;
