import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ROUTES from '@/constants/routes';
import { GenerateUrl } from '@/utils/helper';

export interface INewAnime {
    id: string;
    name: string;
    episode: number;
}

const ItemAnime = ({ item }: { item: INewAnime }) => {
    return (
        <Box
            component={Link}
            href={ROUTES.MOVIE + '/' + GenerateUrl(item.name, item.id)}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #171515',
                padding: '6px',
                textDecoration: 'none',
                '&:hover': { borderLeft: '5px solid #be3232' },
            }}
        >
            <Typography
                sx={{
                    fontSize: '13px',
                    fontWeight: '300',
                    flexGrow: '1',
                    color: '#ce9090',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '70%',
                    paddingRight: '20px',
                    '&:hover': { color: '#fff' },
                }}
            >
                {item.name}
            </Typography>
            <Typography
                sx={{
                    fontSize: '13px',
                    fontWeight: '300',
                    color: '#5f5f5f',
                    fontStyle: 'italic',
                }}
            >
                Tập {item.episode}
            </Typography>
        </Box>
    );
};

export default ItemAnime;
