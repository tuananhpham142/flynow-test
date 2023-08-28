import Footer from '@acme/pages/components/Footer';
import Header from '@acme/pages/components/Header';
import { Inter } from 'next/font/google';
// Import Swiper styles
// import 'swiper/css';
//custom styles
import '../assets/globals.css';
import '../assets/icons.css';
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} bg-background`}>
                <div className='flex'>
                    <Sidebar />
                    <div className='flex-1'>
                        <Header />
                        <div className='container max-w-[1400px] mx-auto px-6'>{children}</div>
                    </div>
                </div>
                <Footer />
            </body>
        </html>
    );
}
