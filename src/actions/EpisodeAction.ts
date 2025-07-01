import { IEpisodeListData } from '@/components/episode/episode.list';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { sendRequest } from '@/utils/api';

export const GetVideoOfEpisode = async (id: string): Promise<string> => {
    try {
        const res = await sendRequest<any>({
            method: 'GET',
            url: `${API_BASE_URL}${API_ENDPOINTS.VIDEOO_OF_EPISODE}`,
            queryParams: {
                id: id,
            },
        });
        return res[0].videoStream;
    } catch (e) {
        console.error('Error in GetVideoOfEpisode:', e);
        return '';
    }
};
