import React, { FC, useState } from 'react';
import { Button, Chip, Typography } from '@acme/design-system';
import TicketTag from '../Tags/TicketTag';
import RoomDetailModal from 'views/detail/components/RoomDetailModal';

interface IProps {}

const RoomTypeOption: FC<IProps> = (props) => {
    const {} = props;
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className='py-3 px-4 my-2 bg-grey-200 rounded-lg w-full'>
            <div className={'flex justify-between'}>
                <div className={'flex flex-col gap-1'}>
                    <Typography
                        htmlTag={'span'}
                        variant={'caption'}
                        className={'!text-white bg-success rounded px-2 py-0.5'}
                    >
                        <i className={'w-5 h-5 mr-1'}>icon</i> Hot deal đặc biệt
                    </Typography>
                    <Typography variant={'caption'}>
                        <i className={'w-4 h-4 mr-1'}>icon</i>Không hoàn tiền khi huỷ phòng
                    </Typography>
                    <Typography variant={'caption'}>
                        <i className={'w-4 h-4 mr-1'}>icon</i>Không bao gồm bữa sáng
                    </Typography>
                    <Typography variant={'caption'} className={'!text-success'}>
                        <i className={'w-4 h-4 mr-1'}>icon</i>Mã
                        <Chip color={'success'} rounded={'rounded'} size={'sm'}>
                            CHAOHE02
                        </Chip>{' '}
                        giảm 10% đã được áp dụng
                    </Typography>
                    <Typography variant={'caption'} className={'!text-danger'}>
                        <i className={'w-4 h-4 mr-1'}>icon</i>Xác nhận trong 2 giờ
                    </Typography>
                    <Typography variant={'caption'} className={'!text-primary'}>
                        <i className={'w-4 h-4 mr-1'}>icon</i>Giá chưa bao gồm VAT. Hoá đơn liên hệ khách sạn
                    </Typography>
                </div>
                <div className='flex flex-col justify-end items-end gap-0.5'>
                    <TicketTag />
                    <Typography variant={'caption'} className={'!text-grey-500'} decoration={'line-through'}>
                        600.000₫
                    </Typography>
                    <Typography variant={'subtitle16'} className={'text-warning'}>
                        470.000₫
                        <Typography htmlTag={'span'} variant={'caption'} className={'!text-grey-500'}>
                            / 1đêm
                        </Typography>
                    </Typography>
                    <Typography variant={'caption'} className={'text-grey-800'}>
                        (900.000₫ cho 2 đêm)
                    </Typography>
                    <Button>Chọn</Button>
                    <Typography variant={'caption'} className={'text-danger'}>
                        Còn 3 phòng có thể đặt!
                    </Typography>
                </div>
            </div>
            <div className='border-b border-grey-300 my-2' />
            <Typography variant={'body16'} className={'!text-primary'} onClick={() => setVisible(true)}>
                Chi tiết phòng
            </Typography>
            <RoomDetailModal visible={visible} onClose={() => setVisible(false)} />
        </div>
    );
};

RoomTypeOption.defaultProps = {};

export default RoomTypeOption;
