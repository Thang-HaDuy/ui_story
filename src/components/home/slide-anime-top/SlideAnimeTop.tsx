'use client';

import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SlideItem, { IStep } from './SlideItem';

interface ISlideAnimeTop {
    tutorialSteps: IStep[];
}

const SlideAnimeTop = (prop: ISlideAnimeTop) => {
    const { tutorialSteps } = prop;

    return (
        <Box
            component={Swiper}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={0}
            sx={{
                '& .swiper-pagination': {
                    textAlign: 'end',
                    paddingRight: '15px',
                    paddingBottom: '8px',
                },
                '& .swiper-pagination-bullet': {
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#fff',
                    opacity: 0.2,
                    borderRadius: '50%',
                    margin: '0 5px',
                },
                '& .swiper-pagination-bullet-active': {
                    backgroundColor: '#b71c1c',
                    opacity: 1,
                },
                marginBottom: '20px',
            }}
        >
            {tutorialSteps.map((step, index) => (
                <SwiperSlide key={index}>
                    <SlideItem step={step} />
                </SwiperSlide>
            ))}
        </Box>
    );
};

export default SlideAnimeTop;
