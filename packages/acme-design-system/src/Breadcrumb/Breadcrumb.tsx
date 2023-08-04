import React, { FC, Fragment, ReactElement, useCallback, useState } from 'react';
import { BreadcrumbProps } from './Breadcrumb.types';
import clsx from 'clsx';
import { BreadcrumbItemProps } from './BreadcrumItem/BreadcrumbItem.types';
import BreadcrumbItem from './BreadcrumItem';

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
    const { children, separator, collapse, customClasses } = props;
    const [expanded, setExpanded] = useState(false);

    const totalItems = React.Children.count(children);
    const lastIndex = totalItems - 1;
    const calcCollapse = { itemsBefore: 1, itemsAfter: 1, max: 4, ...collapse };

    // styles
    const rootClasses = clsx(`flex items-center justify-center`, customClasses?.root);
    const separatorClasses = clsx(`text-sm font-normal text-grey-600 px-2`, customClasses?.separator);

    const renderBreadcrumbItems = useCallback(() => {
        if (!expanded && totalItems > calcCollapse.max) {
            return (
                <>
                    {React.Children.map(children, (child: ReactElement<BreadcrumbItemProps>, index) => {
                        if (index < calcCollapse.itemsBefore) {
                            return (
                                <Fragment key={`breadcrumb_item_${index}`}>
                                    {index !== 0 && <span className={separatorClasses}>{separator}</span>}
                                    <BreadcrumbItem {...child.props}>{child.props.children}</BreadcrumbItem>
                                </Fragment>
                            );
                        }
                    })}
                    <div className='flex items-center justify-center'>
                        <span className={separatorClasses}>{separator}</span>
                        <span
                            className='text-grey-400 cursor-pointer hover:text-grey-600'
                            onClick={() => setExpanded(!expanded)}
                        >
                            ...
                        </span>
                    </div>
                    {React.Children.map(children, (child: ReactElement<BreadcrumbItemProps>, index) => {
                        if (index > lastIndex - calcCollapse.itemsAfter) {
                            return (
                                <Fragment key={`breadcrumb_item_${index}`}>
                                    <span className={separatorClasses}>{separator}</span>
                                    <BreadcrumbItem {...child.props}>{child.props.children}</BreadcrumbItem>
                                </Fragment>
                            );
                        }
                    })}
                </>
            );
        } else {
            return React.Children.map(children, (child: ReactElement<BreadcrumbItemProps>, index) => (
                <Fragment key={`breadcrumb_item_${index}`}>
                    {index !== 0 && <span className={separatorClasses}>{separator}</span>}

                    <BreadcrumbItem {...child}>{child.props.children}</BreadcrumbItem>
                </Fragment>
            ));
        }
    }, [expanded]);

    return (
        <nav>
            <ol className={rootClasses}>{renderBreadcrumbItems()}</ol>
        </nav>
    );
};

Breadcrumb.defaultProps = {
    separator: '/',
    collapse: { itemsBefore: 2, itemsAfter: 2, max: 5 },
};

export default Breadcrumb;
