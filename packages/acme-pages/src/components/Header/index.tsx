'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../Logo';
const Account = dynamic(() => import('./Account'), { ssr: false });

const paths = [
    {
        title: 'Dịch vụ',
        path: '',
    },
    {
        title: 'Về chúng tôi',
        path: '',
    },
    {
        title: 'Tin tức',
        path: '',
    },
    {
        title: 'Liên hệ',
        path: '',
    },
    {
        title: 'Blog',
        path: '',
    },
];

// types
export type UserInfo = {
    nameid: string;
    unique_name: string;
    jti: string;
    usertenantid: string;
    displayname: string;
    avatar: string;
    type: string;
    region: string;
    lang: string;
    iss: string;
    aud: string;
    exp: number;
    nbf: number;
};

type Props = {
    onLoginSuccess?: (userInfo: UserInfo) => void;
    onLogoutSuccess?: () => void;
};

const Header = (props: Props) => {
    const pathname = usePathname();

    return (
        <header className='bg-white relative w-full z-50 border-b border-grey-300'>
            <div className='container max-w-[1400px] mx-auto'>
                <div className='flex flex-wrap items-center justify-between px-[24px] py-[12px]'>
                    <div className='relative  w-full z-20 flex items-center justify-between md:px-0 lg:w-max'>
                        {/* Logo */}
                        <a href='/'>
                            <Logo width={98} />
                        </a>
                        {/* Logo */}

                        {/* Navigation */}
                        <div className='flex ml-[56px]'>
                            <ul className='flex flex-row font-bold gap-10'>
                                {paths.map((path) => {
                                    const isActive = pathname.endsWith(path.path);
                                    return (
                                        <li key={path.path}>
                                            <Link href={path.path}>
                                                <div className='text-grey-800 hover:text-primary block transition'>
                                                    <span className={isActive ? 'text-primary' : 'text-black'}>
                                                        {path.title}
                                                    </span>
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        {/* Navigation */}
                    </div>
                    <Account />
                </div>
            </div>
        </header>
    );
};

export default Header;
