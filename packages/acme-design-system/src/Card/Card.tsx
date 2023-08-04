// Generated with util/create-component.js
import clsx from 'clsx';
import React from 'react';
import { CardProps } from './Card.types';

const Card: React.FC<CardProps> = (props) => {
    const { toolbar, shadow, noPadding, customClasses, header, body, footer, variant, rounded } = props;

    const roundedVariants = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        rounded: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full',
    };

    const rootClasses = clsx(
        'p-4 bg-white flex overflow-hidden',
        shadow,
        noPadding && '!p-0',
        variant && 'border-solid border border-grey-300 shadow-none',
        rounded && roundedVariants[rounded],
        customClasses?.root,
    );

    const bodyClasses = clsx('flex-auto', customClasses?.body);

    return (
        <div className={rootClasses}>
            {(header || toolbar) && (
                <div className={`${customClasses?.headerContainer || 'flex justify-between items-center'}`}>
                    <div className={`${customClasses?.header || 'flex-auto'}`}>{header}</div>
                    <div className={`${customClasses?.toolbar || 'ml-3'}`}>{toolbar}</div>
                </div>
            )}
            {body && <div className={bodyClasses}>{body}</div>}
            {footer && <div className={`${customClasses?.footer || 'py-6'}`}>{footer}</div>}
        </div>
    );
};

Card.defaultProps = {
    shadow: 'shadow',
    rounded: 'rounded',
};

export default Card;
