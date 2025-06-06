'use client';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AnimeUpdateItem, { IAnimeUpdateItem } from './AnimeUpdateItem';
import Button from '@mui/material/Button';
import { useState } from 'react';
import TitelItem from '@/components/home/TitelItem';

const NewAnimeUpdate = () => {
    const items: IAnimeUpdateItem[] = [
        {
            img: '/name2.jpg',
            views: '650,345',
            itemHover: {
                name: 'Isekai Suicide Squad',
                detail: 'Fable là một tay sát thủ lão luyện giỏi nhất trong lĩnh vực của mình. Tuy nhiên, anh ta đã giết rất nhiều người hai po grafile',
                author: ' asread., studio MOTHER ',
                categories: 'Harem, Fantasy, Adventure, Magic',
                performer: 'Harem, Fantasy, Adventure, Magic',
                info: {
                    rate: 3.2,
                    createdAt: '2024-3-5',
                    quality: 'HD',
                    episode: '3/6',
                },
            },
        },
    ];
    const buttonLabels = ['Tất cả', 'Mùa hạ - 2024', 'Anime Bộ', 'Anime lẻ', 'HH Trung Quốc'];
    const [activeButton, setActiveButton] = useState<string | null>('Tất cả');

    const handleButtonClick = (buttonLabel: string) => {
        setActiveButton(buttonLabel);
    };
    return (
        <TitelItem
            title="MỚI CẬP NHẬT"
            childrenTitle={
                <>
                    {/* {buttonLabels.map((label) => (
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
                    ))} */}
                </>
            }
        >
            <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
                {items.map((item, index) => (
                    <AnimeUpdateItem item={item} key={index} index={index} />
                ))}
            </Grid>
        </TitelItem>
    );
};

export default NewAnimeUpdate;
