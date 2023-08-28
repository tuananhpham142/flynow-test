import { Button, Drawer, IconButton, Input, Select, Typography } from '@acme/design-system';
import { FC } from 'react';

interface IProps {
    visible: boolean;
    onClose: (booleanValue: boolean) => void;
}

const CreateAriseDrawer: FC<IProps> = (props) => {
    const { visible, onClose } = props;

    const renderAriseItem = () => {
        return (
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
                <Input fullWidth label='Tiền thanh toán' value={'120.000₫'} />
            </div>
        );
    };

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
                        <Typography variant={'subtitle16'}>Tạo phát sinh thêm</Typography>
                        <IconButton size='lg' variant='text'>
                            <i className='icon icon-caret-right text-[24px]' />
                        </IconButton>
                    </div>
                    <ul className='list-disc list-inside text-grey-600'>
                        <li>Sức chứa tối đa của phòng là 4</li>
                        <li>Số khách tiêu chuẩn là 2</li>
                        <li>Cho phép ở thêm 2 trẻ em thõa mãn 4 khách tối đa</li>
                    </ul>

                    <div className='flex flex-col gap-2 divide-y divide-grey-300'>
                        {renderAriseItem()}
                        {renderAriseItem()}
                    </div>
                    <div className='mt-3 mb-6'>
                        <Button variant={'text'} startIcon={<i className='icon icon-caret-right' />}>
                            Thêm phụ thu
                        </Button>
                    </div>
                    <div className='pt-2 mb-4 border-grey-300 border-t'>
                        <Typography variant={'body14'}>Phương thức thanh toán: Chuyển khoản</Typography>
                        <Typography variant={'body14'} className='mt-2'>
                            Tổng tiền thanh toán:
                            <Typography htmlTag={'span'} variant={'subtitle14'} className='!text-warning mt-2'>
                                120.000đ
                            </Typography>
                        </Typography>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <Button size='lg' rounded='lg'>
                            Gửi yêu cầu
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

CreateAriseDrawer.defaultProps = {};

export default CreateAriseDrawer;
