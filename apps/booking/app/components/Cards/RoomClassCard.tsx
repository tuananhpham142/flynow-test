import React, { FC } from 'react';
import { Card, Typography } from '@acme/design-system';
import Image from 'next/image';
import RoomTypeOption from './RoomTypeOption';

interface IProps {}

const RoomClassCard: FC<IProps> = (props) => {
    const {} = props;

    return (
        <Card
            shadow={'shadow-none'}
            variant={'border'}
            rounded={'lg'}
            customClasses={{ root: '!p-3' }}
            body={
                <div className={'grid grid-cols-4 gap-3'}>
                    <div className={'col-span-1'}>
                        <Image
                            src={'https://picsum.photos/270'}
                            alt='avatar_room'
                            width={270}
                            height={270}
                            className={'rounded-lg w-full'}
                        />
                    </div>
                    <div className={'col-span-3'}>
                        <Typography variant={'subtitle20'}>Deluxe Room River View</Typography>
                        <div className={'flex items-center gap-3 mt-1'}>
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
                        <RoomTypeOption />
                        <RoomTypeOption />
                        <RoomTypeOption />
                    </div>
                </div>
            }
        />
    );
};

RoomClassCard.defaultProps = {};

export default RoomClassCard;
