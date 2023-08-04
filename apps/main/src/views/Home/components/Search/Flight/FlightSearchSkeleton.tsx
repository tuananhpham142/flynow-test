import { FC, Fragment } from 'react';

interface IProps {}

const FlightSearchSkeleton: FC<IProps> = (props) => {
    return (
        <Fragment>
            <div
                className='grid grid-cols-12 animate-pulse'
                style={{
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gridTemplateRows: '1fr 0.25fr 1fr',
                    gridColumnGap: 4,
                    gridRowGap: 4,
                }}
            >
                <div style={{ gridArea: '1 / 1 / 2 / 3' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '1 / 3 / 2 / 5' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '1 / 5 / 2 / 7' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '1 / 7 / 2 / 9' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '2 / 1 / 3 / 3' }}>
                    <div className='bg-grey-400 h-[18px] rounded w-100' />
                </div>
                <div style={{ gridArea: '2 / 3 / 3 / 5' }}>
                    <div className='bg-grey-400 h-[18px] rounded w-100' />
                </div>
                <div style={{ gridArea: '3 / 1 / 4 / 3' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '3 / 3 / 4 / 4' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '3 / 4 / 4 / 6' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '3 / 6 / 4 / 11' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
                <div style={{ gridArea: '3 / 11 / 4 / 13' }}>
                    <div className='bg-grey-400 h-[36px] rounded w-100' />
                </div>
            </div>
        </Fragment>
    );
};
export default FlightSearchSkeleton;
