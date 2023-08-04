import { Typography } from '@acme/design-system';
import { toThousandSeparator } from '@acme/utils';
import Image from 'next/image';
import { FC } from 'react';
interface IProps {
    label: string;
    imageUrl?: string;
    description: string;
    price?: number;
}

const ListItemHorizontal: FC<IProps> = (props) => {
    const { label, imageUrl, description, price } = props;
    return (
        <div className='flex items-center gap-3 w-full'>
            {imageUrl && (
                <div className=''>
                    <Image
                        src={imageUrl}
                        loading='lazy'
                        width={60}
                        height={60}
                        className='w-14 h-14 rounded'
                        alt='Picture of the author'
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}
            <div className='flex flex-col flex-1'>
                <Typography className='text__ellipsis_2' variant='caption'>
                    {label}
                </Typography>
                <div className='flex justify-between mt-1'>
                    <Typography className='text-grey-400' variant='caption'>
                        {description}
                    </Typography>
                    {price && (
                        <Typography className='text-danger' variant='captionBold'>
                            {toThousandSeparator(price)}
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ListItemHorizontal;
