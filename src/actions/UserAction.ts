'use server';

import { IInfoContent } from '@/components/account/info.content';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { sendRequest } from '@/utils/api';

export const getUserInfo = async ({ access_token }: { access_token: string }): Promise<IInfoContent> => {
    try {
        const res = await sendRequest<IBackendRes<IInfoContent>>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.USER_INFO}`,
            nextOption: { next: { revalidate: 3600 } },
            headers: {
                Authorization: `Bearer ${access_token}`, // nếu cần auth
            },
        });
        return res.data as IInfoContent;
    } catch (e) {
        return {} as IInfoContent;
    }
};
