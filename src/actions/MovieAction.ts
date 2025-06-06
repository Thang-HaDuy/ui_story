'use server';

import { IStep } from '@/components/home/slide-anime-top/SlideItem';
import { ITutorialStep } from '@/components/ui/navigation/items/list-movie-top/MovieItem';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { sendRequest } from '@/utils/api';

export const GetListMovieTop = async (): Promise<ITutorialStep[]> => {
    try {
        const res = await sendRequest<IBackendRes<ITutorialStep[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.LIST_MOVIE_TOP}`,
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

export const getSlideAnimeTop = async (): Promise<IStep[]> => {
    try {
        const res = await sendRequest<IBackendRes<IStep[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.SLIDE_ANIME_TOP}`,
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

export const getAnimeUpdate = async (): Promise<[]> => {
    return [];
};

export const getUpcommingAnime = async (): Promise<[]> => {
    return [];
};

export const getNominatedAnime = async (): Promise<[]> => {
    return [];
};
