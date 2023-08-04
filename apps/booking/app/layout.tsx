import Footer from '@acme/pages/components/Footer';
import Header from '@acme/pages/components/Header/index';
import { Inter } from 'next/font/google';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/globals.css';
import '../assets/icons.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} [background:_#fbfbfb]`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
