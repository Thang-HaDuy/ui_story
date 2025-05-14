import Box from '@mui/material/Box';
import RowAnimeTop from '@/components/top-anime/RowAnimeTop';
import RowAnime from '@/components/top-anime/RowAnime';

export interface IRowAnime {
    avatar: string;
    name: string;
    title: string;
    episode: number;
    background: string;
}
const AnimeSlide = ({ items }: { items: IRowAnime[] }) => {
    return (
        <Box>
            {items.map((item, index) =>
                index == 0 ? (
                    <RowAnimeTop item={item} key={index} />
                ) : (
                    <RowAnime item={item} index={index} key={index} />
                ),
            )}
        </Box>
    );
};

export default AnimeSlide;
