import MuiProvider from '@/lib/mui/MuiProvider';
import ReduxProviders from '@/lib/redux/StoreProvider';
import AuthProvider from './auth/auth.provider';

function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProviders>
            <MuiProvider>
                <AuthProvider>{children}</AuthProvider>
            </MuiProvider>
        </ReduxProviders>
    );
}

export default AppProviders;
