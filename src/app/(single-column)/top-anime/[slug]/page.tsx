import AnimeSlide, { IRowAnime } from '@/components/top-anime/Anime.slide';
import NavContro from '@/components/top-anime/NavContro';
import Typography from '@mui/material/Typography';

const Page = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const today = new Date();
    const items: IRowAnime[] = [
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
        {
            avatar: '/name1.jpg',
            name: 'One Piece - Đảo Hải Tặc',
            title: ' Shinmai Ossan Boukensha, Saikyou Party ni Shinu hodo Kitaerarete Muteki ni Naru., The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible (2024)',
            episode: 5,
            background: '/slide.webp',
        },
    ];

    return (
        <>
            <NavContro currentRoute={slug} />
            <Typography
                sx={{
                    color: '#cdff00',
                    fontSize: '25px',
                    fontWeight: '300',
                    textTransform: 'uppercase',
                    marginBottom: '26px',
                }}
            >
                Bảng xếp hạng ngày {today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}{' '}
            </Typography>
            <AnimeSlide items={items} />
        </>
    );
};

export default Page;
