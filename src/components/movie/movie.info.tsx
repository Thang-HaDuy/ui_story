import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Grid';
import AdjustIcon from '@mui/icons-material/Adjust';
import Typography from '@mui/material/Typography';

const MovieInfo = () => {
    return (
        <Box sx={{ bgcolor: 'background.default', paddingBottom: '10px', marginBottom: '20px' }}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <List sx={{ width: '100%', maxWidth: 360 }} aria-label="contacts">
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Tập mới:{' '}
                                </Typography>
                                11, 12, 13
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Trạng thái:{' '}
                                </Typography>
                                full
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Thể Loại:{' '}
                                </Typography>
                                Anime bộ, Fantasy, Adventure, Action,
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Đạo diễn:{' '}
                                </Typography>
                                Mori Kunihiro
                            </Box>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <List sx={{ width: '100%', maxWidth: 360 }} aria-label="contacts">
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Thời lượng:{' '}
                                </Typography>
                                12/12
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Chất lượng:{' '}
                                </Typography>
                                12/12
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Rating:{' '}
                                </Typography>
                                FHD
                            </Box>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{ minWidth: 0, marginRight: '8px' }}>
                                <AdjustIcon sx={{ fontSize: '16px', color: '#b5e745' }} />
                            </ListItemIcon>
                            <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '12px', fontWeight: '300' }}>
                                <Typography sx={{ fontSize: '12px', fontWeight: '700', marginRight: '3px' }}>
                                    Ngôn ngữ:{' '}
                                </Typography>
                                VietSub
                            </Box>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieInfo;
