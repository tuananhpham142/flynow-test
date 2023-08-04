'use client';
import clsx from 'clsx';
import React, { ReactElement, SyntheticEvent, useCallback, useEffect, useRef } from 'react';
import { TabPaneProps } from './TabPane/TabPane.types';
import { TabPanePropsForTabs, TabsProps } from './Tabs.types';

const Tabs: React.FC<TabsProps> = (props: TabsProps) => {
    const { children, customClasses, value, lineSize = 1, color = 'primary', onChange } = props;

    const ACTIVE_TABS_CLASS = 'fl_active_tabs';
    const tabLineSize = `h-[${lineSize}px]`;

    const tabsRef = useRef<HTMLUListElement>(null);
    const tabLineRef = useRef<HTMLDivElement>(null);

    const classRootGenerator = (): string => {
        return clsx('relative flex flex-wrap -mb-px', customClasses?.root ?? '');
    };
    const tabClasses = (child: ReactElement, index: number): string => {
        const activated = value === child.props.id;

        const colors: Record<string, string> = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            danger: 'text-danger',
            success: 'text-success',
            warning: 'text-warning',
            white: 'text-white',
        };

        const lineSizes: Record<string, string> = {
            0: 'border-b-[0px]',
            1: 'border-b-[1px]',
            2: 'border-b-[2px]',
            3: 'border-b-[3px]',
            4: 'border-b-[4px]',
        };

        return clsx(
            'inline-block py-2 px-4 rounded-t-lg cursor-pointer border-[#0000] z-10 relative',
            lineSizes[lineSize],
            activated
                ? `${colors[color]} ${ACTIVE_TABS_CLASS} ${customClasses?.active || ''}`
                : customClasses?.hover || 'hover:border-grey-300 hover:text-grey-600',
            customClasses?.tab || '',
            // Boolean(customClasses?.tab) ? 'text-white',
        );
    };
    const tabLineClasses = () => {
        const colors: Record<string, string> = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            danger: 'bg-danger',
            success: 'bg-success',
            warning: 'bg-warning',
            white: 'bg-white',
        };

        const lineSizes: Record<string, string> = {
            0: 'h-[0px]',
            1: 'h-[1px]',
            2: 'h-[2px]',
            3: 'h-[3px]',
            4: 'h-[4px]',
        };

        return clsx(
            colors[color],
            lineSizes[lineSize],
            'absolute rounded bg-primary bottom-0 [transition:_all_0.2s_ease]',
            customClasses?.tabLine,
        );
    };

    // handler
    const onChangeTab = useCallback(
        (val: any, event: SyntheticEvent) => {
            onChange(val, event);
        },
        [value],
    );

    // handle tab line styles when active tab change
    useEffect(() => {
        if (tabsRef.current && tabLineRef.current) {
            const activeTab = tabsRef.current.querySelector(`.${ACTIVE_TABS_CLASS}`) as HTMLElement;
            const tabLine = tabLineRef.current;
            if (activeTab !== null) {
                tabLine.style.left = activeTab.offsetLeft + 'px';
                tabLine.style.width = activeTab.offsetWidth + 'px';
            }
        }
    }, [tabsRef.current, tabLineRef.current, value]);

    return (
        <ul ref={tabsRef} className={classRootGenerator()}>
            {React.Children.map(children, (child: ReactElement<TabPaneProps<TabPanePropsForTabs>>, index) => (
                <li key={index} className={''}>
                    <a
                        href={child.props?.href || void 0}
                        className={tabClasses(child, index)}
                        onClick={(e) => {
                            if (!child.props.href) {
                                onChangeTab(child.props.id, e);
                            }
                        }}
                    >
                        {child.props.icon && child.props.iconPosition === 'start' ? (
                            <span className={child.props.label ? 'mr-2' : ''}>{child.props.icon}</span>
                        ) : null}
                        {child.props.label}
                        {child.props.icon && child.props.iconPosition === 'end' ? (
                            <span className='ml-2'>{child.props.icon}</span>
                        ) : null}
                    </a>
                </li>
            ))}

            {/* Tab line */}
            <div ref={tabLineRef} className={tabLineClasses()}></div>
            {/* Tab line */}
        </ul>
    );
};
Tabs.displayName = 'SCTabs';

export default Tabs;
