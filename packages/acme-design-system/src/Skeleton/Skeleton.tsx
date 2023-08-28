import React from 'react';
import clsx from 'clsx';
import { SkeletonProps } from './Skeleton.type';

const Skeleton: React.FC<SkeletonProps> = (props) => {
    const { width, height, variant = 'rounded', customClasses, children } = props;

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
            role='status'
            style={{
                width: width,
                height: height,
            }}
            className={skeletonClassesGenerator()}
        >
            {children}
        </div>
    );
};

export default Skeleton;
