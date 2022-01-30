interface IQueryParams {
    page?: number;
    limit?: number;
    params?: string[];
}
interface IQueryURI {
    name: string;
    value: string;
}
export declare function queryParams(data?: IQueryParams): {
    searchURI: string;
    page: string;
    limit: string;
    query: any;
};
export declare function queryURI(params: IQueryURI): string;
export {};
