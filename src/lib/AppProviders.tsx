import MuiProvider from '@/lib/mui/MuiProvider';
import ReduxProviders from '@/lib/redux/StoreProvider';

function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProviders>
            <MuiProvider>{children}</MuiProvider>
        </ReduxProviders>
    );
}

export default AppProviders;
