import { Card, Typography } from '@acme/design-system';
import StarRated from '@acme/pages/components/ReviewAndRating/StarRated';
import Image from 'next/image';
import { FC } from 'react';

interface IProps {}

const AccommodationIntroOnMaps: FC<IProps> = (props) => {
    const {} = props;

    return (
        <Card
            variant='border'
            noPadding
            rounded={'lg'}
            customClasses={{ root: 'overflow-hidden' }}
            body={
                <div className='flex'>
                    <Image
                        src={'https://picsum.photos/90'}
                        alt='avatar_room'
                        width={90}
                        height={90}
                        className='object-cover'
                    />
                    <div className='py-1 px-2 flex-1'>
                        <Typography variant={'subtitle14'}>Libertel Gare De L{`'`}Est Francais</Typography>
                        <Typography variant={'caption'}>73-75 Thủ Khoa Huân, Quận 1, Hồ Chí Minh</Typography>
                        <StarRated />
                        <Typography variant={'subtitle16'} className={'text-warning text-end'}>
                            470.000₫
                            <Typography htmlTag={'span'} variant={'caption'}>
                                / 1đêm
                            </Typography>
                        </Typography>
                    </div>
                </div>
            }
        />
    );
};

AccommodationIntroOnMaps.defaultProps = {};

export default AccommodationIntroOnMaps;
