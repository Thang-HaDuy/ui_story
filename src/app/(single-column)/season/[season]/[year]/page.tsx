import CategoryTable from '@/components/category/category.table';
import NavigationHeadings, { INaviItem } from '@/components/ui/shared/NavigationHeadings';
import AppPagination from '@/components/ui/shared/Pagination';

const Page = ({ params }: { params: { season: string; year: string } }) => {
    const { season, year } = params;

    return (
        <>
            <AppPagination />
            <CategoryTable />
            <AppPagination />
        </>
    );
};

export default Page;
