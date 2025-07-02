'use client';

import { useState } from 'react';
import AppPagination from '../ui/shared/Pagination';
import SearchTable from './search.table';
import { IAnimeUpdateItem } from '../home/anime-update/AnimeUpdateItem';
import { sendRequest } from '@/utils/api';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface ILibraryContainerProp {
    searchData: IModelPaginate<IAnimeUpdateItem[]>;
    slug: string;
}
const SearchContainer = (prop: ILibraryContainerProp) => {
    const { searchData, slug } = prop;
    const [data, setData] = useState(searchData);

    const handlePageChange = async (page: number) => {
        try {
            const res = await sendRequest<IModelPaginate<IAnimeUpdateItem[]>>({
                method: 'GET',
                url: `${API_BASE_URL}${API_ENDPOINTS.SEARCH}`,
                queryParams: {
                    query: slug,
                    type: 'extend',
                    page: page,
                },
            });
            setData(res);
        } catch (e) {
            setData(searchData);
        }
    };
    return (
        <Box>
            <Box>
                <Button
                    endIcon={<ChevronRightIcon />}
                    sx={{
                        background: 'linear-gradient(81.43deg,#b71c1c -26.81%,#8e1438 87.89%)',
                        cursor: 'default',
                        padding: '8px',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '19.8px',
                        marginRight: '8px',
                        marginBottom: '20px',
                    }}
                >
                    Két Quả Tìm Kiếm {slug}
                </Button>
                <SearchTable items={data.data} />
                <AppPagination
                    handlePageChange={handlePageChange}
                    pageCount={data.pageCount}
                    pageNumber={data.pageNumber}
                />
            </Box>
        </Box>
    );
};

export default SearchContainer;
