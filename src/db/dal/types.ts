interface DogSort {
    attribute: 'name' | 'color' | 'tail_length' | 'weight';
    order: 'asc' | 'desc';
}

interface Pagination {
    pageNumber: number;
    pageSize: number;
}

export type DogSortPagination = DogSort & Pagination;

const defaultValue: DogSortPagination = {
    attribute: 'name',
    order: 'asc',
    pageNumber: 1,
    pageSize: 10
}

export const createSortAndPagination = (query?:Partial<DogSortPagination>) :DogSortPagination=>{
    return {
        ...defaultValue,
        ...query
    }
}