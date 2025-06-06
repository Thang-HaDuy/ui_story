// lib/constants/api.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const API_ENDPOINTS = {
    SEARCH: 'api/MovieControllerApi/search?query=',
    LOGIN: 'Api/AccountApi/Login',
    REGISTER: 'Api/AccountApi/Register',
    USER_INFO: 'Api/AccountApi/UserDetail',
    UPDATE_USER: 'Api/AccountApi/UpdateUser',
    FORGOT_PASSWORD: 'Api/AccountApi/ForgotPassword',
    RESET_PASSWORD: 'Api/AccountApi/ResetPassword',
    LIST_MOVIE_TOP: 'Api/MovieApi/MovieTopRating',
    SLIDE_ANIME_TOP: 'Api/MovieApi/SlideAnimeTop',
    NEW_ANIME_UPDATE: 'Api/MovieApi/NewAnimeUpdate',
    // thêm endpoint khác...
};
