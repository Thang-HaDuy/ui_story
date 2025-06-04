import { getUserInfo } from '@/actions/UserAction';
import InfoContent, { IInfoContent } from '@/components/account/info.content';
import ROUTES from '@/constants/routes';
import { auth } from '@/lib/auth/auth';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await auth();
    if (!session) redirect(ROUTES.LOGIN);
    let data;

    try {
        data = await getUserInfo({ access_token: session.user.access_token });
        if (!data) redirect(ROUTES.LOGIN);
    } catch (e) {
        redirect(ROUTES.LOGIN);
    }

    return <InfoContent {...data} />;
};

export default Page;
