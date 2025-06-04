// lib/constants/api.ts

export const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const API_ENDPOINTS = {
    LOGIN: 'api/AccountApi/Login',
    REGISTER: 'api/AccountApi/Register',
    USER_INFO: 'api/AccountApi/UserDetail',
    UPDATE_USER: 'api/AccountApi/UpdateUser',
    FORGOT_PASSWORD: 'api/AccountApi/ForgotPassword',
    RESET_PASSWORD: 'api/AccountApi/ResetPassword',
    LIST_MOVIE_TOP: 'api/MovieApi/MovieTopRating',
    // thêm endpoint khác...
};
