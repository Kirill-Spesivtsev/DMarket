export interface Pagination<T> {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    hasPrevious: boolean;
    hasNext: boolean;
    data: T;
  }
  