'use client';

import Box from '@mui/material/Box';
import TitleSidebar from '@/components/ui/sidebar/item/TitleSidebar';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import MovieItem, { ITutorialStep } from '@/components/ui/navigation/items/list-movie-top/MovieItem';

export interface IMoviesuggestProp {
    data: ITutorialStep[];
}

const Moviesuggest = (prop: IMoviesuggestProp) => {
    const breakpoints = {
        150: {
            slidesPerView: 2,
        },
        467: {
            slidesPerView: 4,
        },
        785: {
            slidesPerView: 6,
        },
        1005: {
            slidesPerView: 6,
        },
    };

    const tutorialSteps: ITutorialStep[] = [
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
        {
            avatar: 'Uploads/Image/Movie/2025/6/1/4mkkqktc.webp',
            averageRating: 3.2,
            className: 'hello',
            description: 'fgjdjsagkefhdsgja',
            episode: '12',
            id: 'gdgfhsjkgfsd',
            name: 'hahahaha',
        },
    ];

    const [swiper, setSwiper] = useState<any>(null);

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };

    const handleBack = () => {
        if (swiper) swiper.slidePrev();
    };

    return (
        <Box sx={{ bgcolor: '#181d1f', padding: '10px' }}>
            <TitleSidebar content={'Phim liên quan'}>
                <></>
            </TitleSidebar>
            <Box
                sx={{ position: 'relative', maxWidth: '100%', flexGrow: 1, marginBottom: '20px', borderRadius: '3px' }}
            >
                <Box
                    component={Swiper}
                    sx={{ marginX: '-9.6px' }}
                    onSwiper={setSwiper}
                    breakpoints={breakpoints}
                    loop={true}
                >
                    {prop.data.map((step, index) => (
                        <SwiperSlide key={index}>
                            <MovieItem step={step} />
                        </SwiperSlide>
                    ))}
                </Box>

                <IconButton
                    sx={{
                        position: 'absolute',
                        zIndex: '10',
                        height: '31.5px',
                        width: '25px',
                        borderRadius: 'inherit',
                        marginLeft: '-2.5px',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                        backgroundColor: '#f62f39',
                        '&:hover': { backgroundColor: '#f62f39' },
                    }}
                    size="small"
                    onClick={handleBack}
                >
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                    sx={{
                        position: 'absolute',
                        zIndex: '10',
                        height: '31.5px',
                        width: '25px',
                        borderRadius: 'inherit',
                        marginRight: '-2.5px',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        backgroundColor: '#f62f39',
                        '&:hover': { backgroundColor: '#f62f39' },
                    }}
                    size="small"
                    onClick={handleNext}
                >
                    <KeyboardArrowRight />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Moviesuggest;
