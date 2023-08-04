import '@/assets/flights.css';
import '@/assets/globals.css';
import '@/assets/icons.css';
import Footer from '@acme/pages/components/Footer';
import Header from '@acme/pages/components/Header/index';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'FlyNow Page',
    generator: 'FlyNow',
    applicationName: 'FlyNow Learning',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Flight'],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
            'vi-VN': '/vi-VN',
        },
    },
};

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
