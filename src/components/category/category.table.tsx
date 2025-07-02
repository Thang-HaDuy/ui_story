'use client';

import { Grid } from '@mui/material';
import AnimeUpdateItem, { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';

export interface ICategoryTableProp {
    items: IAnimeUpdateItem[];
}
const CategoryTable = (prop: ICategoryTableProp) => {
    const { items } = prop;

    return (
        <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
            {items?.map((item, index) => (
                <AnimeUpdateItem item={item} key={index} index={index} />
            ))}
        </Grid>
    );
};

export default CategoryTable;
