import React from 'react';
import { DividerProps } from './Divider.type';
import clsx from 'clsx';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
    const { vertical = false, children, className, color = 'grey-300' } = props;

    const dividerClasses = clsx(
        vertical ? 'inline-block align-middle w-[1px]' : 'h-[1px] ',
        children
            ? `flex items-center bg-transparent justify-center before:content-[""] before:flex-1 before:border-${color} after:content-[""] after:flex-1 after:border-${color}`
            : `bg-${color}`,
        children && (vertical ? 'flex-col before:border-l after:border-l' : 'flex-row before:border-t after:border-t'),
        className,
    );

    return (
        <div role='separator' aria-orientation={vertical ? 'vertical' : 'horizontal'} className={dividerClasses}>
            {children && <span className={'px-1'}>{children}</span>}
        </div>
    );
});

export default Divider;
