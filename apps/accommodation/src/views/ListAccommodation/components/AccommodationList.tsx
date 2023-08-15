import AccommodationIntro from '@/components/Cards/AccommodationIntro';
import { ListRenderer, Typography } from '@acme/design-system';

type Props = {
    onSelectItem?: (flight: any) => void;
};

const AccommodationList = (props: Props) => {
    const { onSelectItem } = props;
    return (
        <div>
            <ListRenderer
                items={Array.apply(null, Array(5))}
                renderItem={(p: any) => <AccommodationIntro />}
                customClasses={{
                    wrapper: 'flex flex-col gap-3 w-full',
                    itemWrapper: 'flex-1 flex-col',
                }}
            />
            <div className='flex items-center justify-center mt-4'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <Typography
                        customClasses={{
                            root: 'text-primary',
                        }}
                    >
                        Xem thêm
                    </Typography>
                    <i className='icon icon-caret-down text-[24px]' />
                </div>
            </div>
        </div>
    );
};

export default AccommodationList;
