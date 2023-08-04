// Generated with util/create-component.js
import { ReactNode } from 'react';
import { CustomClasses } from '../../theme/theme.types';

export type TabPaneProps<T> = CustomClasses<'root'> & {
    value: string | number;
    id: string | number;
    children?: ReactNode;
    customComponent: React.ComponentType<HTMLDivElement>;
} & T;

// export type DivAttributes = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

// export type TabPaneProps<Props, BaseType = DivAttributes> = Props &
//     Omit<DivAttributes, keyof BaseType> &
//     Omit<BaseType, keyof Props | 'ref'> & {
//         customComponent?: React.ComponentType<BaseType>;
//     } & CustomClasses<'root'> & {
//         value: string | number;
//         id: string | number;
//         children?: ReactNode;
//         customComponent: React.ComponentType<HTMLDivElement>;
//     };
