import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { sendRequest } from '@/utils/api';
import { CustomError } from './auth.config';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (!credentials.email || !credentials.password) {
                    return null;
                }
                try {
                    const res = await sendRequest<IBackendRes<ILogin>>({
                        method: 'POST',
                        url: `${API_BASE_URL}${API_ENDPOINTS.LOGIN}`,
                        body: {
                            email: credentials.email,
                            password: credentials.password,
                        },
                    });

                    if (res.statusCode === 200) {
                        return res.data!;
                    }

                    // ❌ Đây là lỗi logic (sai tài khoản, v.v.)
                    // Không để trong try vì sẽ bị catch ăn mất
                    throw new CustomError('Thông tin tài khoản hoặc mật khẩu không chính xác');
                } catch (err: any) {
                    // ❗ Đây là lỗi mạng (fetch error, server die)
                    if (err instanceof CustomError) throw err; // ném lại nếu là lỗi có chủ đích
                    throw new CustomError('Lỗi máy chủ hoặc mất kết nối');
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                // User is available during sign-in
                token.user = user;
            }
            return token;
        },
        session({ session, token }) {
            session.user = token.user;
            return session;
        },
    },
});
