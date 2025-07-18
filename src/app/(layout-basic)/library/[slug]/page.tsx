import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LibraryNav from '@/components/library/library.nav';
import { INaviItem } from '@/components/ui/shared/NavigationHeadings';
import LibraryTable from '@/components/library/library.table';
import AppPagination from '@/components/ui/shared/Pagination';
import { ILibraryRowData } from '@/components/library/library.row';
import { GetMovieInLibrary } from '@/actions/MovieAction';
import LibraryContainer from '@/components/library/library.container';

const Page = async ({ params }: { params: { slug: string } }) => {
    const navItems: INaviItem[] = [
        { title: '0-9', href: '/library/0-9' },
        { title: 'A', href: '/library/A' },
        { title: 'B', href: '/library/B' },
        { title: 'C', href: '/library/C' },
        { title: 'D', href: '/library/D' },
        { title: 'E', href: '/library/E' },
        { title: 'F', href: '/library/F' },
        { title: 'G', href: '/library/G' },
        { title: 'H', href: '/library/H' },
        { title: 'I', href: '/library/I' },
        { title: 'J', href: '/library/J' },
        { title: 'K', href: '/library/K' },
        { title: 'L', href: '/library/L' },
        { title: 'M', href: '/library/M' },
        { title: 'N', href: '/library/N' },
        { title: 'O', href: '/library/O' },
        { title: 'P', href: '/library/P' },
        { title: 'Q', href: '/library/Q' },
        { title: 'R', href: '/library/R' },
        { title: 'S', href: '/library/S' },
        { title: 'T', href: '/library/T' },
        { title: 'U', href: '/library/U' },
        { title: 'V', href: '/library/V' },
        { title: 'W', href: '/library/W' },
        { title: 'X', href: '/library/X' },
        { title: 'Y', href: '/library/Y' },
        { title: 'Z', href: '/library/Z' },
    ];

    let libraryData: IModelPaginate<ILibraryRowData[]>;
    try {
        libraryData = await GetMovieInLibrary(params.slug, 1);
    } catch (error) {
        console.error('Error fetching home page data:', error);
        // Có thể trả về trang lỗi hoặc thông báo
        return { success: false, data: [], pageNumber: 1, pageCount: 1 };
    }
    return (
        <Box>
            <Typography
                sx={{
                    backgroundColor: '#0397d6',
                    display: 'inline-block',
                    paddingX: '20px',
                    font: '16px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    height: '40px',
                    lineHeight: '40px',
                    borderRadius: '3px 3px 0 0',
                    marginBottom: '10px',
                }}
            >
                Thư viện Anime
            </Typography>
            <LibraryNav items={navItems} route={params.slug} />
            <LibraryContainer libraryData={libraryData} slug={params.slug} />
        </Box>
    );
};

export default Page;
