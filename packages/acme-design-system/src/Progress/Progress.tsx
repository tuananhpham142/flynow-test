import clsx from 'clsx';
import type { FC } from 'react';
import { ProgressProps } from './Progress.types';

const Progress: FC<ProgressProps> = (props) => {
    const { size, customClasses, color, percentage } = props;

    const rootStyles = `w-full bg-grey-300 rounded`;

    const sizes = {
        md: 'h-1',
        lg: 'h-2',
    };

    const colors = {
        primary: 'bg-primary',
        warning: 'bg-warning',
        danger: 'bg-danger',
        success: 'bg-success',
        secondary: 'bg-secondary',
    };

    const rootClasses = clsx(rootStyles, size && sizes[size], customClasses?.root);

    const barClasses = clsx('rounded', size && sizes[size], color && colors[color]);

    return (
        <div className={rootClasses}>
            <div
                role='progressbar'
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
                className={barClasses}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};

Progress.defaultProps = {
    size: 'md',
    color: 'primary',
};

export default Progress;
