'use server';

import { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';
import { IStep } from '@/components/home/slide-anime-top/SlideItem';
import { IUpcommingItem } from '@/components/home/upcomming-anime/UpcommingItem';
import { ITutorialStep } from '@/components/ui/navigation/items/list-movie-top/MovieItem';
import { INewAnime } from '@/components/ui/sidebar/item/anime-new-update/ItemAnime';
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

export const getAnimeUpdate = async (): Promise<IAnimeUpdateItem[]> => {
    try {
        const res = await sendRequest<IBackendRes<IAnimeUpdateItem[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.NEW_ANIME_UPDATE}`,
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

export const getUpcommingAnime = async (): Promise<IUpcommingItem[]> => {
    try {
        const res = await sendRequest<IBackendRes<IUpcommingItem[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.UPCOMMING_ANIME}`,
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

export const getNominatedAnime = async (): Promise<IAnimeUpdateItem[]> => {
    try {
        const res = await sendRequest<IBackendRes<IAnimeUpdateItem[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.NOMINATED_ANIME}?filter=most_viewed_today`,
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

export const getMinimalAnimeUpdates = async (): Promise<INewAnime[]> => {
    try {
        const res = await sendRequest<IBackendRes<INewAnime[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.MINIMAL_NEW_ANIME}`,
        });
        return res.data;
    } catch (e) {
        return [];
    }
};
