'use client';

import { sendRequest } from '@/utils/api';
import AppPagination from '../ui/shared/Pagination';
import { ILibraryRowData } from './library.row';
import LibraryTable from './library.table';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { useState } from 'react';

export interface ILibraryContainerProp {
    libraryData: IModelPaginate<ILibraryRowData[]>;
    slug: string;
}
const LibraryContainer = (prop: ILibraryContainerProp) => {
    const { libraryData, slug } = prop;
    const [data, setData] = useState(libraryData);

    const handlePageChange = async (page: number) => {
        try {
            const res = await sendRequest<IModelPaginate<ILibraryRowData[]>>({
                method: 'GET',
                url: `${API_BASE_URL}${API_ENDPOINTS.MOVIE_IN_LIBRARY}`,
                queryParams: {
                    filter: slug,
                    page: page,
                },
            });
            setData(res);
        } catch (e) {
            setData(libraryData);
        }
    };

    return (
        <>
            <LibraryTable datas={data.data} pageNumber={data.pageNumber} />
            <AppPagination
                pageCount={data.pageCount}
                pageNumber={data.pageNumber}
                handlePageChange={handlePageChange}
            />
        </>
    );
};

export default LibraryContainer;
