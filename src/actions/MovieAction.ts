'use server';

import { IEpisodeListData } from '@/components/episode/episode.list';
import { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';
import { IStep } from '@/components/home/slide-anime-top/SlideItem';
import { IUpcommingItem } from '@/components/home/upcomming-anime/UpcommingItem';
import { ILibraryRowData } from '@/components/library/library.row';
import { IMovieBanerData, IMovieBanerProp } from '@/components/movie/movie.baner';
import { IMovieInfoProp } from '@/components/movie/movie.info';
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

export const SearchMovie = async (slug: string): Promise<IModelPaginate<IAnimeUpdateItem[]>> => {
    try {
        const res = await sendRequest<IModelPaginate<IAnimeUpdateItem[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.SEARCH}`,
            queryParams: {
                query: slug,
                type: 'extend',
            },
        });
        return res;
    } catch (e) {
        return {} as IModelPaginate<IAnimeUpdateItem[]>;
    }
};

export const GetMovieByCategory = async (slug: string): Promise<IModelPaginate<IAnimeUpdateItem[]>> => {
    try {
        const res = await sendRequest<IModelPaginate<IAnimeUpdateItem[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.MOVIE_BY_CATEGORY}`,
            queryParams: {
                query: slug,
            },
        });
        return res;
    } catch (e) {
        return {} as IModelPaginate<IAnimeUpdateItem[]>;
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
            url: `${API_BASE_URL}${API_ENDPOINTS.NOMINATED_ANIME}`,
            queryParams: {
                filter: 'most_viewed_today',
            },
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

export const GetMovieInLibrary = async (filter: string, page: number): Promise<IModelPaginate<ILibraryRowData[]>> => {
    try {
        const res = await sendRequest<IModelPaginate<ILibraryRowData[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.MOVIE_IN_LIBRARY}`,
            queryParams: {
                filter: filter,
                page: page,
            },
        });
        return res;
    } catch (e) {
        return {} as IModelPaginate<ILibraryRowData[]>;
    }
};

export const GetMovieBanerData = async (id: string): Promise<IMovieBanerData[]> => {
    try {
        const res = await sendRequest<IBackendRes<IMovieBanerData[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.MOVIE_BANER_BY_ID}`,
            queryParams: {
                id: id,
            },
        });

        return res.data;
    } catch (e) {
        return [];
    }
};

export const GetMovieInfoData = async (id: string): Promise<IMovieInfoProp[]> => {
    try {
        const res = await sendRequest<IBackendRes<IMovieInfoProp[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.MOVIE_INFO_BY_ID}`,
            queryParams: {
                id: id,
            },
        });
        console.log(res);
        return res.data;
    } catch (e) {
        return [];
    }
};

export const GetMoviesuggestData = async (id: string): Promise<ITutorialStep[]> => {
    try {
        const res = await sendRequest<IBackendRes<ITutorialStep[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.MOVIE_SUGGEST}`,
            queryParams: {
                id: id,
            },
        });
        return res.data;
    } catch (e) {
        return [];
    }
};

export const GetEpisodeListData = async (id: string): Promise<IEpisodeListData[]> => {
    try {
        const res = await sendRequest<IBackendRes<IEpisodeListData[]>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.EPISODE_LIST}`,
            queryParams: {
                id: id,
            },
        });
        return res.data;
    } catch (e) {
        return [];
    }
};
