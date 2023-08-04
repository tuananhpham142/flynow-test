'use client';
import { Typography, IconButton } from '@acme/design-system';
import React, { FC } from 'react';

interface IProps {}

const DetailsInfo: FC<IProps> = (props) => {
    const {} = props;

    const renderUtilitiesItem = () => {
        return (
            <div className='flex items-center gap-1'>
                <i>icon</i>
                <Typography variant={'body16'}>Wifi</Typography>
            </div>
        );
    };

    return (
        <div>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Tiện ích chỗ ở
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <div className='grid grid-rows-4 grid-flow-col gap-x-8 gap-y-4'>
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                    {renderUtilitiesItem()}
                </div>
            </div>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Thông tin thêm
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <Typography className='whitespace-pre-wrap'>
                    {`Nếu đặt phòng quá muộn, nhất là khi sát với những ngày nghỉ lễ tết khi có rất nhiều người đi du lịch bạn sẽ phải trả những cái giá đắt hơn rất nhiều so với thông thường.\nDù cho tất cả thông tin đã được viết đầy đủ trên website, bạn cũng đừng ngần ngại hỏi chủ khách sạn hay các nhân viên tiếp tân những gì bạn còn chưa rõ về phòng nghỉ để có được thông tin chính xác nhất.\nHiện có rất nhiều web lừa đảo chuyên cung cấp các dịch vụ đặt phòng khách sạn ảo. Để tránh bị lừa, tốt nhất bạn nên đặt phòng qua chính website của khách sạn đó.`}
                </Typography>
            </div>
            <div>
                <Typography htmlTag={'h5'} variant={'h5'}>
                    Chính sách
                </Typography>
                <div className='border-b border-grey-300 my-4' />
                <div className='flex items-center gap-8 mb-3'>
                    <div className='flex items-center gap-2'>
                        <IconButton size='lg' variant='contained'>
                            icon
                        </IconButton>
                        <div>
                            <Typography variant={'body14'}>Giờ nhận phòng</Typography>
                            <Typography variant={'subtitle14'}>14 : 00</Typography>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IconButton size='lg' variant='contained'>
                            icon
                        </IconButton>
                        <div>
                            <Typography variant={'body14'}>Giờ trả phòng</Typography>
                            <Typography variant={'subtitle14'}>14 : 00</Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant={'subtitle16'} className='mb-2'>
                        Chính sách trẻ em
                    </Typography>
                    <Typography className='whitespace-pre-wrap'>
                        {`Khách lớn hơn 11 tuổi sẽ được xem như người lớn.\nTrẻ em từ 0 tuổi đến 11 tuổi lưu trú có thể phát sinh phụ thu.\nQuý khách hàng vui lòng nhập đúng số lượng khách và tuổi để có giá chính xác.`}
                    </Typography>
                </div>
            </div>
        </div>
    );
};

DetailsInfo.defaultProps = {};

export default DetailsInfo;
