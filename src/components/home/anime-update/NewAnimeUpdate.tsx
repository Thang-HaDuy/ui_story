import Grid from '@mui/material/Grid';
import AnimeUpdateItem, { IAnimeUpdateItem } from './AnimeUpdateItem';
import TitelItem from '@/components/home/TitelItem';

interface ISlideAnimeTop {
    items: IAnimeUpdateItem[];
}

const NewAnimeUpdate = (prop: ISlideAnimeTop) => {
    const { items } = prop;
    return (
        <TitelItem title="MỚI CẬP NHẬT" childrenTitle={<></>}>
            <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
                {items.map((item, index) => {
                    return <AnimeUpdateItem item={item} key={index} index={index} />;
                })}
            </Grid>
        </TitelItem>
    );
};

export default NewAnimeUpdate;
