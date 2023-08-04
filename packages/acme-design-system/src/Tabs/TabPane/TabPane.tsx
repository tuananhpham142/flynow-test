// Generated with util/create-component.js
import React from 'react';
import clsx from 'clsx';
import { TabPaneProps } from './TabPane.types';
const TabPane: React.FC<TabPaneProps<any>> = (props) => {
    const { value, id, children, customClasses } = props;
    const visible = value === id;
    const classRootGenerator = (): string => {
        return clsx(visible ? 'block' : 'hidden', 'tab-pane', customClasses?.root);
    };
    return (
        <div role='tabpanel' className={classRootGenerator()}>
            {children}
        </div>
    );
};
TabPane.displayName = 'SCTabPane';
TabPane.defaultProps = {};
export default TabPane;
