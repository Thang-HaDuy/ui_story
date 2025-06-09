'use client';

import Grid from '@mui/material/Grid';
import UpcommingItem, { IUpcommingItem } from './UpcommingItem';
import TitelItem from '@/components/home/TitelItem';

interface IUpcommingAnime {
    items: IUpcommingItem[];
}
const UpcommingAnime = (prop: IUpcommingAnime) => {
    const { items } = prop;

    return (
        <TitelItem title="SẮP CHIẾU" childrenTitle={<></>}>
            <Grid container sx={{ marginX: '-10px', width: 'auto' }}>
                {items.map((item, index) => (
                    <UpcommingItem item={item} key={index} index={index} />
                ))}
            </Grid>
        </TitelItem>
    );
};

export default UpcommingAnime;
