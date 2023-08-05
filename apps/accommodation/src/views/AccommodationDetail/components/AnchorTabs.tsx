'use client';
import { TabPane, Tabs } from '@acme/design-system';
import React, { FC, useState } from 'react';

interface IProps {}

enum DetailTabs {
    GENERAL = 1,
    ROOMS,
    AMENITIES,
    REVIEW,
    RECOMMEND,
}

const AnchorTabs: FC<IProps> = (props) => {
    const {} = props;
    const [value, setValue] = useState<DetailTabs>(DetailTabs.GENERAL);
    const handleChangeTab = (val: DetailTabs, event: React.SyntheticEvent) => {
        setValue(val);
    };

    return (
        <div className='border-b border-grey-500'>
            <Tabs
                onChange={handleChangeTab}
                value={value}
                lineSize={4}
                color={'warning'}
                customClasses={{
                    root: 'container max-w-[1200px] mx-auto',
                    tab: 'text-grey-800',
                    active: '!text-warning font-bold',
                }}
            >
                <TabPane value={value} id={DetailTabs.GENERAL} label={'Giới thiệu chung'} />
                <TabPane value={value} id={DetailTabs.ROOMS} label={'Danh sách phòng'} />
                <TabPane value={value} id={DetailTabs.AMENITIES} label={'Tiện nghi'} />
                <TabPane value={value} id={DetailTabs.REVIEW} label={'Đánh giá'} />
                <TabPane value={value} id={DetailTabs.RECOMMEND} label={'Gợi ý khác'} />
            </Tabs>
        </div>
    );
};

AnchorTabs.defaultProps = {};

export default AnchorTabs;
