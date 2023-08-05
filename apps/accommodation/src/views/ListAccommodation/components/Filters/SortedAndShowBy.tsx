import React, { FC } from 'react';
import { Select, Typography, Chip } from '@acme/design-system';

interface IProps {}

const SortedAndShowBy: FC<IProps> = (props) => {
    const {} = props;

    return (
        <div>
            <div className='flex items-center justify-between border-b border-grey-300 pb-2'>
                <div className='flex flex-col'>
                    <Typography htmlTag='h5' variant='h5'>
                        Hà Nội
                    </Typography>
                    <Typography
                        variant={'body16'}
                        customClasses={{
                            root: 'text-grey-500',
                        }}
                    >
                        1,226 kết quả
                    </Typography>
                </div>
                <div className='flex items-center gap-2'>
                    <Typography
                        variant={'body16'}
                        customClasses={{
                            root: 'text-grey-800',
                        }}
                    >
                        Sắp xếp theo
                    </Typography>
                    <Select
                        defaultValue={{
                            label: 'Đề xuất',
                            value: '',
                        }}
                        isClearable={false}
                        isSearchable={false}
                        size='lg'
                        placeholder='Sắp xếp theo'
                        options={[
                            {
                                label: 'Đề xuất',
                                value: '',
                            },
                            {
                                label: 'Giá giảm dần',
                                value: '',
                            },
                            {
                                label: 'Giá tăng dần',
                                value: '',
                            },
                            {
                                label: 'Khoảng cách xa dần',
                                value: '',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='flex items-center gap-1 my-4'>
                <Typography
                    variant={'body16'}
                    customClasses={{
                        root: 'text-grey-800 mr-2',
                    }}
                >
                    Hiển thị theo
                </Typography>
                <Chip checked>Tất cả</Chip>
                <Chip>Đề xuất</Chip>
                <Chip>Có hoàn huỷ</Chip>
            </div>
        </div>
    );
};

SortedAndShowBy.defaultProps = {};

export default SortedAndShowBy;
