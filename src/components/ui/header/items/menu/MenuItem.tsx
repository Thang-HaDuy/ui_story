import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import MenuDropDown from '@/components/ui/header/items/menu/MenuDropDown';
import { Item } from '@/components/ui/header/items/menu/ItemDropdown';

export const topAnime: Item[] = [
    { href: 'day.html', text: 'Theo Ngày' },
    { href: 'seasion.html', text: 'Theo Mùa' },
    { href: 'year.html', text: 'Theo Năm' },
    { href: 'month.html', text: 'Theo Tháng' },
    { href: 'voied.html', text: 'Yêu Thích' },
];
export const theLoai: Item[] = [
    { href: '/category/action', text: 'Action' },
    { href: '/category/action', text: 'Adventure' },
    { href: '/category/action', text: 'Cartoon' },
    { href: '/category/action', text: 'Comedy' },
    { href: '/category/action', text: 'Dementia' },
    { href: '/category/action', text: 'Demons' },
    { href: '/category/action', text: 'Drama' },
    { href: '/category/action', text: 'Ecchi' },
    { href: '/category/action', text: 'Fantasy' },
    { href: '/category/action', text: 'Game' },
    { href: '/category/action', text: 'Harem' },
    { href: '/category/action', text: 'Historical' },
    { href: '/category/action', text: 'Horror' },
    { href: '/category/action', text: 'Josei' },
    { href: '/category/action', text: 'Kids' },
    { href: '/category/action', text: 'Magic' },
    { href: '/category/action', text: 'Mecha' },
    { href: '/category/action', text: 'Military' },
    { href: '/category/action', text: 'Music' },
    { href: '/category/action', text: 'Mystery' },
    { href: '/category/action', text: 'Parody' },
    { href: '/category/action', text: 'Police' },
    { href: '/category/action', text: 'Psychological' },
    { href: '/category/action', text: 'Romance' },
    { href: '/category/action', text: 'Samurai' },
    { href: '/category/action', text: 'Shounen' },
];
export const seasion: Item[] = [
    { href: 'day.html', text: 'Mùa Đông 2024' },
    { href: 'seasion.html', text: 'Mùa Xuân 2024' },
    { href: 'year.html', text: 'Mùa Hạ 2024' },
    { href: 'month.html', text: 'Mùa Thu 2024' },
    { href: 'voied.html', text: 'Mùa Đông 2023' },
    { href: 'voied.html', text: 'Mùa Xuân 2023' },
    { href: 'voied.html', text: 'Mùa Hạ 2023' },
    { href: 'voied.html', text: 'Mùa Thu 2023' },
    { href: 'voied.html', text: 'Mùa Thu 2022' },
    { href: 'voied.html', text: 'Mùa Đông 2022' },
    { href: 'voied.html', text: 'Mùa Xuân 2022' },
    { href: 'voied.html', text: 'Mùa Hạ 2022' },
];

export const navs: Item[] = [
    { href: 'anime/library/A/', text: 'THƯ VIỆN' },
    { href: '/lich-chieu-phim.html', text: 'LỊCH CHIẾU' },
];
const MenuItems = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
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
            <MenuDropDown contents={seasion} className="seasion">
                <Button sx={{ color: '#fff', '&:hover': { backgroundColor: 'transparent' } }}>
                    SEASION <KeyboardArrowDownIcon sx={{ color: '#b5e745' }} />
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
