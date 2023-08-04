import { AlignHorizontalVariant, CustomClasses } from '../theme/theme.types';
import { MouseEventHandler, ReactElement, ReactNode } from 'react';

export interface TypographyProps extends CustomClasses<'root'> {
    children: ReactNode;
    htmlTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p' | 'div';
    variant?:
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'subtitle20'
        | 'subtitle16'
        | 'subtitle14'
        | 'subtitle18'
        | 'body20'
        | 'body18'
        | 'body16'
        | 'body14'
        | 'strikethrough20'
        | 'strikethrough16'
        | 'italic16'
        | 'caption'
        | 'captionBold'
        | 'tiny';
    align?: AlignHorizontalVariant;
    decoration?: 'underline' | 'overline' | 'line-through' | 'no-underline';
    className?: string;
    onClick?: (e: any) => void;
}
