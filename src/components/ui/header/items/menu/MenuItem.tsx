import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import MenuDropDown from '@/components/ui/header/items/menu/MenuDropDown';
import { Item } from '@/components/ui/header/items/menu/ItemDropdown';

export const topAnime: Item[] = [
    { href: '/top-anime/day', text: 'Theo Ngày' },
    { href: '/top-anime/season', text: 'Theo Mùa' },
    { href: '/top-anime/year', text: 'Theo Năm' },
    { href: '/top-anime/month', text: 'Theo Tháng' },
    { href: '/top-anime/voied', text: 'Yêu Thích' },
];
export const theLoai: Item[] = [
    { href: '/category/Action', text: 'Action' },
    { href: '/category/Adventure', text: 'Adventure' },
    { href: '/category/Cartoon', text: 'Cartoon' },
    { href: '/category/Comedy', text: 'Comedy' },
    { href: '/category/Dementia', text: 'Dementia' },
    { href: '/category/Demons', text: 'Demons' },
    { href: '/category/Drama', text: 'Drama' },
    { href: '/category/Ecchi', text: 'Ecchi' },
    { href: '/category/Fantasy', text: 'Fantasy' },
    { href: '/category/Game', text: 'Game' },
    { href: '/category/Harem', text: 'Harem' },
    { href: '/category/Historical', text: 'Historical' },
    { href: '/category/Horror', text: 'Horror' },
    { href: '/category/Josei', text: 'Josei' },
    { href: '/category/Kids', text: 'Kids' },
    { href: '/category/Magic', text: 'Magic' },
    { href: '/category/Mecha', text: 'Mecha' },
    { href: '/category/Military', text: 'Military' },
    { href: '/category/Music', text: 'Music' },
    { href: '/category/Mystery', text: 'Mystery' },
    { href: '/category/Parody', text: 'Parody' },
    { href: '/category/Police', text: 'Police' },
    { href: '/category/Psychological', text: 'Psychological' },
    { href: '/category/Romance', text: 'Romance' },
    { href: '/category/Samurai', text: 'Samurai' },
    { href: '/category/Shounen', text: 'Shounen' },
];
export const season: Item[] = [
    { href: '/season/winter/2024', text: 'Mùa Đông 2024' },
    { href: '/season/spring/2024', text: 'Mùa Xuân 2024' },
    { href: '/season/summer/2024', text: 'Mùa Hạ 2024' },
    { href: '/season/autumn/2024', text: 'Mùa Thu 2024' },
    { href: '/season/winter/2023', text: 'Mùa Đông 2023' },
    { href: '/season/spring/2023', text: 'Mùa Xuân 2023' },
    { href: '/season/summer/2023', text: 'Mùa Hạ 2023' },
    { href: '/season/autumn/2023', text: 'Mùa Thu 2023' },
    { href: '/season/autumn/2022', text: 'Mùa Thu 2022' },
    { href: '/season/winter/2022', text: 'Mùa Đông 2022' },
    { href: '/season/spring/2022', text: 'Mùa Xuân 2022' },
    { href: '/season/summer/2022', text: 'Mùa Hạ 2022' },
];

export const navs: Item[] = [{ href: '/library/0-9/', text: 'THƯ VIỆN' }];
const MenuItems = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <Button component={Link} href="/" sx={{ color: '#fff', '&:hover': { backgroundColor: 'transparent' } }}>
                HOME
            </Button>
            <MenuDropDown contents={topAnime} className="topAnime">
                <Button sx={{ color: '#fff', '&:hover': { backgroundColor: 'transparent' } }}>
                    TOP ANIME <KeyboardArrowDownIcon sx={{ color: '#b5e745' }} />
                </Button>
            </MenuDropDown>
            <MenuDropDown contents={theLoai} className="theLoai">
                <Button sx={{ color: '#fff', '&:hover': { backgroundColor: 'transparent' } }}>
                    THỂ LOẠI <KeyboardArrowDownIcon sx={{ color: '#b5e745' }} />
                </Button>
            </MenuDropDown>
            <MenuDropDown contents={season} className="season">
                <Button sx={{ color: '#fff', '&:hover': { backgroundColor: 'transparent' } }}>
                    SEASON <KeyboardArrowDownIcon sx={{ color: '#b5e745' }} />
                </Button>
            </MenuDropDown>
            {navs.map((nav, index) => (
                <Button
                    key={index}
                    component={Link}
                    href={nav.href}
                    sx={{ color: '#fff', '&:hover': { backgroundColor: 'transparent' } }}
                >
                    {nav.text}
                </Button>
            ))}
        </Box>
    );
};

export default MenuItems;
