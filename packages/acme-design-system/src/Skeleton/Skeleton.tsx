import React from 'react';
import clsx from 'clsx';
import { SkeletonProps } from './Skeleton.type';

const Skeleton: React.FC<SkeletonProps> = (props) => {
    const { width, height, variant = 'rounded', customClasses } = props;

    const skeletonClassesGenerator = () => {
        const variants = {
            rectangular: 'rounded-none',
            rounded: 'rounded',
            circular: 'rounded-full',
        };
        return clsx('animate-pulse bg-grey-200', variants[variant], customClasses?.root);
    };

    return (
        <div
            style={{
                width: width,
                height: height,
            }}
            className={skeletonClassesGenerator()}
        ></div>
    );
};

export default Skeleton;
