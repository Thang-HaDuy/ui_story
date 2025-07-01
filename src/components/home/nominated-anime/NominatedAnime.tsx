'use client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState, useTransition } from 'react';
import TitelItem from '@/components/home/TitelItem';
import AnimeUpdateItem, { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';
import { API_BASE_URL, API_ENDPOINTS } from '@/constants/api';
import { sendRequest } from '@/utils/api';

interface INominatedAnime {
    items: IAnimeUpdateItem[];
}

const NominatedAnime = (prop: INominatedAnime) => {
    const [movies, setMovies] = useState<IAnimeUpdateItem[]>(prop.items);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();

    const buttonLabels = ['Xem nhiều hôm nay', 'Xem nhiều trong tuần', 'Tháng'];
    const filterMap: Record<string, string> = {
        'Xem nhiều hôm nay': 'most_viewed_today',
        'Xem nhiều trong tuần': 'most_viewed_week',
        Tháng: 'most_viewed_month',
    };
    const [activeButton, setActiveButton] = useState<string>('Xem nhiều hôm nay');

    const handleButtonClick = async (buttonLabel: string) => {
        if (buttonLabel === activeButton) return;
        setActiveButton(buttonLabel);

        const filter = filterMap[buttonLabel];
        startTransition(async () => {
            setError(null);
            try {
                const res = await sendRequest<IBackendRes<IAnimeUpdateItem[]>>({
                    method: 'GET',
                    url: `${API_BASE_URL}${API_ENDPOINTS.NOMINATED_ANIME}`,
                    queryParams: {
                        filter: filter,
                    },
                });
                setMovies(res.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
            }
        });
    };

    return (
        <TitelItem
            title="ĐỀ CỬ"
            childrenTitle={
                <>
                    {buttonLabels.map((label) => (
                        <Button
                            key={label}
                            onClick={() => handleButtonClick(label)}
                            sx={{
                                paddingX: '15px',
                                color: activeButton === label ? '#f44336' : 'gray',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            {label}
                        </Button>
                    ))}
                </>
            }
        >
            <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
                {isPending ? (
                    <div>Đang tải...</div>
                ) : error ? (
                    <div>Lỗi: {error}</div>
                ) : movies.length === 0 ? (
                    <div>Không tìm thấy phim</div>
                ) : (
                    movies.map((item, index) => <AnimeUpdateItem key={index} item={item} index={index} />)
                )}
            </Grid>
        </TitelItem>
    );
};

export default NominatedAnime;
