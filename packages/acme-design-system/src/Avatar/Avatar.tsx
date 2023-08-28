import clsx from 'clsx';
import { FC } from 'react';
import { AvatarProps } from './Avatar.types';

const Avatar: FC<AvatarProps> = (props) => {
    const { children, variant, customClasses, size, src, alt, badgeContent, showBadge } = props;

    const rootStyles = `relative flex justify-center items-center bg-grey-400 text-white`;

    const variants = {
        square: 'rounded-none',
        rounded: 'rounded',
        circle: 'rounded-full',
    };

    const sizes = {
        '24': 'w-6 h-6 font-normal text-sm',
        '32': 'w-8 h-8 font-bold text-sm',
        '40': 'w-10 h-10 font-bold text-sm',
        '48': 'w-12 h-12 font-semibold text-xl',
        '56': 'w-14 h-14 font-medium text-2xl',
        '72': 'w-[72px] h-[72px] font-light text-3xl',
        '100': 'w-[100px] h-[100px] font-extralight text-5xl',
        '120': 'w-[120px] h-[120px] font-extralight text-5xl',
    };

    const badgeSizes = {
        '24': 'w-2 h-2 font-normal text-xs',
        '32': 'w-2.5 h-2.5 font-bold text-xs',
        '40': 'h-3 w-3 font-bold text-xs',
        '48': 'w-4 h-4 font-semibold text-xs',
        '56': 'w-5 h-5 font-medium text-sm',
        '72': 'w-6 h-6 font-light text-sm',
        '100': 'w-8 h-8 font-extralight text-lg',
        '120': 'w-10 h-10 font-extralight text-lg',
    };

    const rootClasses = clsx(rootStyles, variant && variants[variant], size && sizes[size], customClasses?.root);

    const badgeClasses = clsx(
        'absolute inline-flex justify-center items-center rounded-full ring-2 ring-white bg-success right-0 bottom-0 z-[1]',
        size && badgeSizes[size],
        customClasses?.badge,
    );

    return (
        <div className={rootClasses}>
            {showBadge && <span className={badgeClasses}>{badgeContent}</span>}
            {src ? (
                <div className='w-full h-full overflow-hidden rounded-full'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className='w-full h-full object-cover' loading={'lazy'} src={src} alt={alt || 'avatar'} />
                </div>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};

Avatar.defaultProps = {
    variant: 'circle',
    size: '40',
};

export default Avatar;
