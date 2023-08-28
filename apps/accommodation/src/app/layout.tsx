import Footer from '@acme/pages/components/Footer';
import Header from '@acme/pages/components/Header';
import { Inter } from 'next/font/google';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
//custom styles
import '../assets/globals.css';
import '../assets/icons.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-background`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
