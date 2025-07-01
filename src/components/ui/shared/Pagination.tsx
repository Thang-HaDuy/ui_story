'use client';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';

export interface IAppPaginationProp {
    pageNumber: number;
    pageCount: number;
    handlePageChange: (page: number) => void;
}
const AppPagination = (prop: IAppPaginationProp) => {
    const { pageNumber, pageCount, handlePageChange } = prop;
    return (
        <Stack
            spacing={2}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '20px',
            }}
        >
            <Pagination
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
                count={pageCount}
                onChange={(e, p) => {
                    if (pageNumber != p) {
                        handlePageChange(p);
                    }
                }}
                renderItem={(item) => {
                    return (
                        <PaginationItem
                            {...item}
                            components={{
                                previous: () => (
                                    <Box sx={{ paddingX: '10px' }}>
                                        Page {pageNumber} of {pageCount}
                                    </Box>
                                ),
                                next: () => <Box sx={{ paddingX: '10px' }}>Last page</Box>,
                            }}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#b71c1c', // Màu nền khi được chọn
                                    color: '#fff', // Màu chữ khi được chọn
                                    borderRadius: '3px',
                                    '&:hover': {
                                        backgroundColor: '#b71c1c', // Màu nền khi hover và được chọn
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: '#b5e745', // Màu nền khi hover
                                    borderRadius: '3px',
                                    color: '#fff',
                                },
                                color: '#78909c', // Màu chữ mặc định
                                fontSize: '16px', // Kích thước chữ
                                fontWeight: '700', // Độ cao của chữ
                                borderRadius: '3px',
                                backgroundColor: '#181d1f',
                                height: '40px',
                                minWidth: '40px',
                            }}
                        />
                    );
                }}
            />
        </Stack>
    );
};

export default AppPagination;
