'use server';

import { ITutorialStep } from '@/components/ui/navigation/items/list-movie-top/MovieItem';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { sendRequest } from '@/utils/api';

export const GetListMovieTop = async (): Promise<ITutorialStep[] | undefined> => {
    try {
        const res = await sendRequest<IBackendRes<ITutorialStep[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.LIST_MOVIE_TOP}`,
            nextOption: { next: { revalidate: 3600 } },
        });
        return res.data;
    } catch (e) {
        console.log('Check error >>>: ', e);
        throw new Error('Lỗi server!');
    }
};
