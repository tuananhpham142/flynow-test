import clsx from 'clsx';
import type { ComponentType, ReactNode } from 'react';
import { Fragment, useMemo, useState, useTransition } from 'react';
import { CustomClasses } from '../theme/theme.types';
import type { WithInjectedProps } from '../types/common.types';

interface IProps<T, E = React.HTMLProps<HTMLButtonElement>> extends CustomClasses<'title' | 'wrapper' | 'itemWrapper'> {
    title?: string | ReactNode;
    limit?: number;
    items: ReadonlyArray<T>;
    renderItem: (item: T) => ReactNode;
    renderKey?: (item: T) => string;
    onClick?: (item: T) => void;
    noDivider?: boolean;
    collapseButton?: {
        Element: ComponentType<WithInjectedProps<E>>;
        props: Omit<E, 'onClick'>;
    };
    emptyItem?: ReactNode;
    dividerItem?: ReactNode;
}

const ListRenderer = <T,>(props: IProps<T>) => {
    const {
        title,
        items,
        limit,
        renderItem,
        renderKey,
        onClick,
        noDivider,
        collapseButton,
        dividerItem,
        emptyItem,
        customClasses,
    } = props;

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    const [isPeding, startTransition] = useTransition();
    const collapsedItems = useMemo(() => {
        return items.slice(0, limit);
    }, [items]);

    return (
        <div
            className={clsx('rounded-xl', {
                [`${customClasses?.wrapper}`]: customClasses?.wrapper,
            })}
        >
            {typeof title === 'string' ? (
                <span
                    className={clsx('p-4 pb-0 fs-1', {
                        [`${customClasses?.title}`]: customClasses?.title,
                    })}
                >
                    {title}
                </span>
            ) : (
                title
            )}
            <>
                {(isCollapsed ? collapsedItems : items).map((item, i, list) => (
                    <Fragment key={renderKey ? renderKey(item) : i}>
                        <div
                            onClick={() => onClick?.(item)}
                            className={clsx('flex last:pb-0', {
                                [`${customClasses?.itemWrapper}`]: customClasses?.itemWrapper,
                            })}
                        >
                            {renderItem(item)}
                        </div>

                        {!noDivider && i < list.length - 1 ? dividerItem : <></>}
                    </Fragment>
                ))}
            </>
            {isCollapsed && collapsedItems.length < items.length && collapseButton ? (
                <div className='p-2'>
                    {
                        <collapseButton.Element
                            {...collapseButton.props}
                            onClick={(event: React.MouseEvent<HTMLElement>) => {
                                event.preventDefault();
                                startTransition(() => {
                                    setIsCollapsed(false);
                                });
                            }}
                        />
                    }
                </div>
            ) : emptyItem ? (
                emptyItem
            ) : (
                <></>
            )}
        </div>
    );
};
export default ListRenderer;
