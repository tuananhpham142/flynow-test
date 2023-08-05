'use client';

import { Typography } from '@acme/design-system';
import { FC } from 'react';

interface IProps {}

const TicketTag: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div className='h-5 bg-danger relative px-3 flex items-center rounded-sm rip'>
            <Typography variant={'caption'} className={'text-white'}>
                Giam 10%
            </Typography>
        </div>
    );
};

TicketTag.defaultProps = {};

export default TicketTag;
