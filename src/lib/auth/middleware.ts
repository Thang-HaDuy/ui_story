import ROUTES from '@/constants/routes';

export { auth as middleware } from '@/lib/auth/auth';

export const config = {
    matcher: [ROUTES.ACCOUNT_INFO],
};
