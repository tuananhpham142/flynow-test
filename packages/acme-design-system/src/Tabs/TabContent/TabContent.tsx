import React from 'react';
import {TabContentProps} from './TabContent.types';

const TabContent: React.FC<TabContentProps> = props => {
	const { children, vertical, className } = props;

	const classRootGenerator = (): string => {
		let classes = [
			 'tab-content',
			!vertical && 'pt-4',
			className
		];
		return classes.join(' ');
	};

	return (
		<div className={classRootGenerator()}>
			{children}
		</div>
	);
};

TabContent.displayName = 'SCTabContent';

export default TabContent;