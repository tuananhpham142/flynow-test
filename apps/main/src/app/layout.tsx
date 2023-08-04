'use client';
import { SWRConfig } from '@acme/api';
import { Inter } from 'next/font/google';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const classNameRoot = `${inter.className} bg-background`;
    return (
        <html lang='en'>
            <SWRConfig>
                <body className={classNameRoot} style={{ minHeight: '100vh' }}>
                    {children}
                </body>
            </SWRConfig>
        </html>
    );
}
