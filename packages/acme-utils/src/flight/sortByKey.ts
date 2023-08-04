export type SortType = 'asc' | 'desc';

export const sortByKey = <T>(list: Array<T>, key: keyof T, sortType: SortType) => {
    switch (sortType) {
        case 'asc':
            return list.sort((a: T, b: T) => {
                if (a[key] > b[key]) return 1;
                if (a[key] < b[key]) return -1;
                return 0;
            });
        case 'desc':
            return list.sort((a: T, b: T) => {
                if (a[key] < b[key]) return 1;
                if (a[key] > b[key]) return -1;
                return 0;
            });
    }
};
