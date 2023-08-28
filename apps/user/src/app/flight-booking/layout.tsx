'use client';
import React, { FC } from 'react';
import { Breadcrumb, BreadcrumbItem } from '@acme/design-system';

interface IProps {
    children: React.ReactNode;
}

const LayoutAccommodationBookings: FC<IProps> = (props) => {
    const { children } = props;

    return <div className={'container max-w-[1200px] mx-auto px-6 my-6 lg:px-0'}>{children}</div>;
};

LayoutAccommodationBookings.defaultProps = {};

export default LayoutAccommodationBookings;
