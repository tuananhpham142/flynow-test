import React, { FC } from 'react';
import { Drawer, Typography, IconButton, Select, Input, Button, _OpenConfirmDialog } from '@acme/design-system';

interface IProps {
    visible: boolean;
    onClose: (booleanValue: boolean) => void;
}

const OrderCancellationDrawer: FC<IProps> = (props) => {
    const { visible, onClose } = props;

    return (
        <Drawer
            position='right'
            openDuration={300}
            lockScroll={true}
            isOpen={visible}
            outSideClick={true}
            onClose={(state) => {
                onClose(state);
            }}
            body={
                <div className='bg-white w-96 h-screen px-6 py-4 relative'>
                    <div className={'flex justify-between items-center'}>
                        <Typography variant={'subtitle16'}>Huỷ đơn hàng</Typography>
                        <IconButton size='lg' variant='text'>
                            <i className='icon icon-caret-right text-[24px]' />
                        </IconButton>
                    </div>
                    <ul className='list-disc list-inside'>
                        <li>
                            Quý khách được miễn phí hoàn hủy nếu hủy phòng từ 13:00 ngày 02/10/2022 đến trước 13:00 ngày
                            04/10/2022
                        </li>
                        <li>
                            Quý khách sẽ được hoàn 10.000.000₫ nếu hủy phòng từ 13:00 ngày 04/10/2022 đến trước 12:00
                            ngày 06/10/2022
                        </li>
                    </ul>

                    <div className='flex flex-col gap-3 pt-3 pb-1'>
                        <Select
                            label={'Loại phụ thu'}
                            required
                            fullWidth
                            isClearable={false}
                            isSearchable={false}
                            placeholder='Chọn'
                            options={[
                                {
                                    label: 'Phụ thu người lớn',
                                    value: 0,
                                },
                                {
                                    label: 'Phụ thu trẻ em',
                                    value: 1,
                                },
                            ]}
                        />
                        <Input fullWidth label='Tiền hoàn dự kiến' value={'120.000₫'} />
                        <Select
                            label={'Tên ngân hàng'}
                            required
                            fullWidth
                            isClearable={false}
                            isSearchable={false}
                            placeholder='Chọn'
                            options={[
                                {
                                    label: 'Techcom bank',
                                    value: 0,
                                },
                                {
                                    label: 'MB bank',
                                    value: 1,
                                },
                            ]}
                        />
                        <Input fullWidth required label='Số tài khoản' value={'120.000₫'} />
                    </div>

                    <div className={'flex items-center gap-2 mt-6'}>
                        <Button
                            size='lg'
                            rounded='lg'
                            onClick={() => {
                                _OpenConfirmDialog({
                                    title: 'Xác nhận hành động',
                                    content: 'Bạn có chắc chắn muốn...',
                                    variant: 'warning',
                                    onConfirm: () => {},
                                    onCancel: () => {},
                                    duration: 0,
                                    labelConfirm: 'Xác nhận hủy đơn hàng',
                                    labelCancel: 'Bỏ qua',
                                });
                            }}
                        >
                            Xác nhận
                        </Button>
                        <Button size='lg' rounded='lg' variant={'text'} color='muted'>
                            Bỏ qua
                        </Button>
                    </div>
                </div>
            }
        />
    );
};

OrderCancellationDrawer.defaultProps = {};

export default OrderCancellationDrawer;
