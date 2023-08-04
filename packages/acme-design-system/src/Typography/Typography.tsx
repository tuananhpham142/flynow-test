import clsx from 'clsx';
import { FC } from 'react';
import { TypographyProps } from './Typography.types';

const Typography: FC<TypographyProps> = (props) => {
    const { variant, children, customClasses, htmlTag, decoration, className, onClick } = props;
    const Tag = htmlTag as keyof JSX.IntrinsicElements;

    const variants = {
        h1: 'text-[61px] leading-[80px] font-light',
        h2: 'text-[49px] leading-[64px] font-normal',
        h3: 'text-[39px] leading-[52px] font-normal',
        h4: 'text-[31px] leading-10 font-medium',
        h5: 'text-[25px] leading-8 font-semibold',
        subtitle20: 'text-xl font-bold',
        subtitle18: 'text-lg font-bold',
        subtitle16: 'text-base font-bold',
        subtitle14: 'text-sm font-bold',
        body20: 'text-xl font-normal',
        body18: 'text-lg font-normal',
        body16: 'text-base font-normal',
        body14: 'text-sm font-normal',
        strikethrough20: 'text-xl font-normal line-through',
        strikethrough16: 'text-base font-normal line-through',
        italic16: 'text-base font-normal',
        caption: 'text-[13px] font-normal leading-5',
        captionBold: 'text-[13px] font-bold leading-5',
        tiny: 'text-[10px] leading-4 font-normal',
    };

    const decorations = {
        underline: 'underline',
        overline: 'overline',
        'line-through': 'line-through',
        'no-underline': 'no-underline',
    };

    const rootClasses = clsx(
        'text-grey-800',
        variant && variants[variant],
        decoration && decorations[decoration],
        className,
        customClasses?.root,
    );

    return (
        <Tag className={rootClasses} onClick={onClick}>
            {children}
        </Tag>
    );
};

Typography.defaultProps = {
    variant: 'body16',
    htmlTag: 'p',
};

export default Typography;
