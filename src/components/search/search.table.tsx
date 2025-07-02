import AnimeUpdateItem, { IAnimeUpdateItem } from '@/components/home/anime-update/AnimeUpdateItem';
import Grid from '@mui/material/Grid';

export interface ISearchTableProp {
    items: IAnimeUpdateItem[];
}

const SearchTable = (prop: ISearchTableProp) => {
    const { items } = prop;
    return (
        <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
            {items.map((item, index) => {
                return <AnimeUpdateItem item={item} key={index} index={index} />;
            })}
        </Grid>
    );
};

export default SearchTable;
