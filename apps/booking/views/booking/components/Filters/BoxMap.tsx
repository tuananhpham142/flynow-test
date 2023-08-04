'use client';

import React, { FC } from 'react';
import { Button } from '@acme/design-system';

interface IProps {}

const BoxMap: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div
            style={{ backgroundImage: `url("https://picsum.photos/300")` }}
            className={'flex items-end justify-center p-4 bg-cover bg-center bg-no-repeat w-full h-40'}
        >
            <Button size={'sm'} customClasses={{ root: 'border border-white' }} startIcon={<i>icon</i>}>
                Xem bản đồ
            </Button>
        </div>
    );
};

BoxMap.defaultProps = {};

export default BoxMap;
