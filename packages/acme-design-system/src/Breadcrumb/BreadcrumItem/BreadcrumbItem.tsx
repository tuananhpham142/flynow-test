import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { BreadcrumbItemProps } from './BreadcrumbItem.types';

const BreadcrumbItem: FC<BreadcrumbItemProps> = (props) => {
    const { children, icon, customClasses, href } = props;

    const rootStyles = `flex items-center text-grey-400 last:!text-grey-600`;

    const rootClasses = clsx(rootStyles, customClasses?.root);

    return (
        <li className={rootClasses}>
            {icon && <span className={'text-[16px] mr-1'}>{icon}</span>}
            <Link href={href || '#'} className='hover:underline'>
                {children}
            </Link>
        </li>
    );
};

BreadcrumbItem.defaultProps = {};

export default BreadcrumbItem;
