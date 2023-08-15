import { IconButton, Modal, Typography } from '@acme/design-system';
import { FC } from 'react';

interface IProps {
    visible: boolean;
    onClose: (visible: boolean) => void;
}

const RoomDetailModal: FC<IProps> = (props) => {
    const { visible, onClose } = props;

    const renderAmenitiesItem = () => {
        return (
            <div className='flex items-center gap-1'>
                <IconButton>icon</IconButton>
                <div>
                    <Typography variant={'body14'}>Wifi miễn phí</Typography>
                </div>
            </div>
        );
    };

    return (
        <Modal
            outSideClick={true}
            lockScroll={true}
            isOpen={visible}
            setIsOpen={(visible) => {
                onClose(visible);
            }}
            body={
                <div className={'w-[732px] bg-white p-4 flex flex-col gap-2 rounded-lg'}>
                    <Typography htmlTag={'h4'} variant={'h4'} className={'!text-grey-600'}>
                        Classic Double Room
                    </Typography>
                    <img
                        src={'https://picsum.photos/700'}
                        alt={'X'}
                        width={700}
                        height={394}
                        className={'object-cover w-full h-[394px]'}
                    />
                    <Typography variant={'body16'} className={'!text-grey-600'}>
                        Room with attached bathroom with a mini-bar, a flat-screen TV and Bluetooth speakers. A free
                        bottle of mineral water is provided. It is not possible to add an extra bed in this room. Twin
                        beds are possible upon request and upon the hotels confirmation. Room with attached bathroom
                        with a mini-bar, a flat-screen TV and Bluetooth speakers. A free bottle of mineral water is
                        provided. It is not possible to add an extra bed in this room. Twin beds are possible upon
                        request and upon the hotels confirmation.
                    </Typography>
                    <div className={'flex items-center gap-3'}>
                        <Typography variant={'caption'} className={'!text-grey-500'}>
                            <i className={'w-4 h-4 mr-1'}>icon</i>Hướng biển
                        </Typography>
                        <Typography variant={'caption'} className={'!text-grey-500'}>
                            <i className={'w-4 h-4 mr-1'}>icon</i>Hướng biển
                        </Typography>
                        <Typography variant={'caption'} className={'!text-grey-500'}>
                            <i className={'w-4 h-4 mr-1'}>icon</i>Hướng biển
                        </Typography>
                    </div>
                    <div className='border-b border-grey-300' />
                    <Typography variant={'subtitle18'}>Tiện ích phòng</Typography>
                    <div className={'grid grid-cols-2 gap-x-6 gap-y-3'}>
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                        {renderAmenitiesItem()}
                    </div>
                </div>
            }
        />
    );
};

RoomDetailModal.defaultProps = {};

export default RoomDetailModal;
