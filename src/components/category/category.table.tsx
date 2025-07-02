'use client';

import { Grid } from '@mui/material';
import AnimeUpdateItem, { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';

const CategoryTable = () => {
    const items: IAnimeUpdateItem[] = [];

    return (
        <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
            {items.map((item, index) => (
                <AnimeUpdateItem item={item} key={index} index={index} />
            ))}
        </Grid>
    );
};

export default CategoryTable;
