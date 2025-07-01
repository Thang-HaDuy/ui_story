// lib/constants/api.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const API_ENDPOINTS = {
    SEARCH: 'Api/MovieApi/search?query=',
    LOGIN: 'Api/AccountApi/Login',
    REGISTER: 'Api/AccountApi/Register',
    USER_INFO: 'Api/AccountApi/UserDetail',
    UPDATE_USER: 'Api/AccountApi/UpdateUser',
    COMFIRM_EMAIL: 'Api/AccountApi/ConfirmEmail',
    FORGOT_PASSWORD: 'Api/AccountApi/ForgotPassword',
    RESET_PASSWORD: 'Api/AccountApi/ResetPassword',
    LIST_MOVIE_TOP: 'Api/MovieApi/MovieTopRating',
    SLIDE_ANIME_TOP: 'Api/MovieApi/SlideAnimeTop',
    NEW_ANIME_UPDATE: 'Api/MovieApi/NewAnimeUpdate',
    UPCOMMING_ANIME: 'Api/MovieApi/UpcommingAnime',
    NOMINATED_ANIME: 'Api/MovieApi/NominatedAnime',
    MINIMAL_NEW_ANIME: 'Api/MovieApi/MinimalNewAnimeUpdates',
    MOVIE_IN_LIBRARY: 'Api/MovieApi/MovieInLibrary',
    MOVIE_BANER_BY_ID: 'Api/MovieApi/MovieBanerById',
    MOVIE_INFO_BY_ID: 'Api/MovieApi/MovieInfoById',
    MOVIE_SUGGEST: 'Api/MovieApi/MovieSuggest',
    EPISODE_LIST: 'Api/MovieApi/EpisodeList',
    VIDEOO_OF_EPISODE: 'Api/EpisodeApi/GetVideoOfEpisode',
    // thêm endpoint khác...
};
