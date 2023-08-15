import React, { FC, useState } from 'react';
import { Typography, Modal } from '@acme/design-system';

interface IProps {}

const SurchargeItem: FC<IProps> = (props) => {
    const {} = props;
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <div className='flex justify-between py-3'>
                <Typography className={'basis-4/12'}>Phụ thu người lớn</Typography>
                <Typography>10/08/2022, 10:19</Typography>
                <Typography variant={'subtitle16'} className={'!text-warning'}>
                    75.000₫
                </Typography>
                <div className={'flex items-center cursor-pointer'} onClick={() => setVisible(true)}>
                    <Typography htmlTag={'span'} variant={'body16'} className={'!text-success'}>
                        Thành công
                    </Typography>
                    <i className='icon icon-caret-right text-[24px] ml-1' />
                </div>
            </div>
            <Modal
                outSideClick={true}
                lockScroll={true}
                isOpen={visible}
                setIsOpen={(visible) => {
                    setVisible(visible);
                }}
                body={
                    <div className={'w-96 bg-white rounded-lg flex flex-col gap-3 p-6'}>
                        <Typography variant={'subtitle16'}>Chi tiết phát sinh thêm</Typography>
                        <div className='flex justify-between'>
                            <Typography variant={'body14'}>Phụ thu người lớn</Typography>
                            <Typography variant={'body14'}>350,000₫</Typography>
                        </div>
                        <div className='flex justify-between'>
                            <Typography variant={'body14'}>Tổng tiền thanh toán</Typography>
                            <Typography variant={'subtitle14'} className={'!text-warning'}>
                                350,000₫
                            </Typography>
                        </div>
                        <div className='flex justify-between'>
                            <Typography variant={'body14'}>Trạng thái thanh toán</Typography>
                            <Typography variant={'body14'} className={'!text-success'}>
                                Thành công
                            </Typography>
                        </div>
                    </div>
                }
            />
        </>
    );
};

SurchargeItem.defaultProps = {};

export default SurchargeItem;
