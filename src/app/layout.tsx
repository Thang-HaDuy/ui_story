import Footer from '@/components/ui/footer/Footer';
import Header from '@/components/ui/header/Header';
import AppProviders from '@/lib/AppProviders';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Alata:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </head>
            <body>
                <AppProviders>
                    <Header />
                    {children}
                    <Footer />
                </AppProviders>
            </body>
        </html>
    );
};

export default RootLayout;
