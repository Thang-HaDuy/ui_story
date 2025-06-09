import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';

export interface IInforItem {
    rate: number;
    createdAt: string;
    quality: string;
    episode: string;
}

const InforList = ({ item, color }: { item: IInforItem; color?: string }) => {
    const [year] = item.createdAt.split('-');

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', paddingBottom: '6.4px' }}>
            <Typography
                sx={{
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '8px',
                    color: '#b5e745',
                }}
            >
                <StarIcon sx={{ fontSize: '14px', marginRight: '4px' }} />
                {item.rate}
            </Typography>
            <Typography
                sx={{
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '8px',
                    color: color ? color : '#fff',
                }}
            >
                <AccessTimeIcon sx={{ fontSize: '14px', marginRight: '4px' }} />
                {item.episode}
            </Typography>
            <Typography
                sx={{
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    marginRight: '8px',
                    color: color ? color : '#fff',
                }}
            >
                <DateRangeIcon sx={{ fontSize: '14px', marginRight: '4px' }} />
                {year}
            </Typography>
            <Typography
                sx={{
                    fontSize: '12px',
                    backgroundColor: '#e62117',
                    borderRadius: '10px',
                    paddingX: '9.6px',
                }}
            >
                {item.quality}
            </Typography>
        </Box>
    );
};

export default InforList;
