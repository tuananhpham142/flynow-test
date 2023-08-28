import React from 'react';
import { Typography, clsx } from '@acme/design-system';
import Link from 'next/link';

type Props = {
    isCollapsed: boolean;
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
};

const SidebarItem = (props: Props) => {
    const { isCollapsed, icon, label, isActive = false, onClick } = props;

    const rootClasses = clsx(
        'flex items-center justify-start gap-2 p-3 rounded cursor-pointer hover:bg-grey-200 focus:bg-grey-200 group whitespace-nowrap',
        isActive && 'bg-grey-200',
    );
    const labelClasses = clsx('group-hover:!text-primary', isActive ? '!text-primary' : '!text-grey-600');

    const iconWrapperClasses = clsx(
        'grow-0 shrink-0',
        isActive ? '[&>svg]:fill-primary [&>svg]:stroke-primary' : '[&>svg]:fill-grey-600 [&>svg]:stroke-grey-600',
    );

    return (
        // <Link href={path}>
        <div onClick={onClick} className={rootClasses}>
            <div className={iconWrapperClasses}>{icon}</div>
            {!isCollapsed && <Typography className={labelClasses}>{label}</Typography>}
        </div>
        // </Link>
    );
};

export default SidebarItem;
