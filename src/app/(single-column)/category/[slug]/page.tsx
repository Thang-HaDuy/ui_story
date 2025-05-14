import CategoryTable from '@/components/category/category.table';
import AppPagination from '@/components/ui/shared/Pagination';

const Page = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <AppPagination />
            <CategoryTable />
            <AppPagination />
        </>
    );
};

export default Page;
