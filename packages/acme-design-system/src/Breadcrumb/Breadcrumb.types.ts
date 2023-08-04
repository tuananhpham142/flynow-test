import { CustomClasses } from '../theme/theme.types';
import { ReactElement, ReactNode } from 'react';
import { BreadcrumbItemProps } from './BreadcrumItem/BreadcrumbItem.types';

export interface BreadcrumbProps extends CustomClasses<'root' | 'separator'> {
    children: ReactElement[] | ReactElement;
    separator?: ReactNode | ReactElement;
    collapse?: {
        itemsBefore: number;
        itemsAfter: number;
        max: number;
    };
}
