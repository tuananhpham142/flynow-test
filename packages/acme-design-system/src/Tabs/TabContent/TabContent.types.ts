import {ReactNode} from 'react';

export interface TabContentProps {
	children: ReactNode;
	vertical?: boolean;
	className?: string;
}