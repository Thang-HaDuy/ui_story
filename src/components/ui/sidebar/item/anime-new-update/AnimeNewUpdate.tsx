import Box from '@mui/material/Box';
import TitleSidebar from '@/components/ui/sidebar/item/TitleSidebar';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ItemAnime, { INewAnime } from './ItemAnime';

interface IAnimeNewUpdate {
    newAnime: INewAnime[];
}
const AnimeNewUpdate = (prop: IAnimeNewUpdate) => {
    const { newAnime } = prop;

    return (
        <Box
            sx={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#181d1f',
                marginBottom: '20px',
                borderRadius: '3px',
            }}
        >
            <TitleSidebar content={'ANIME MỚI CẬP NHẬT'}>
                <></>
            </TitleSidebar>
            <Box>
                {newAnime.map((anime, index) => (
                    <ItemAnime key={index} item={anime} />
                ))}
                <Box
                    component={Link}
                    href="/login"
                    sx={{
                        textDecoration: 'none',
                        paddingY: '6px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '13px',
                            fontWeight: '300',
                            padding: '7px',
                            color: '#ccc',
                            '&:hover': { color: '#fff', borderLeft: '5px solid #be3232' },
                            borderBottom: '1px solid #171515',
                        }}
                    >
                        Xem Thêm...
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default AnimeNewUpdate;
