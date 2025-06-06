export interface FileAccessor {
    filePath: string;
}
export declare class FileService<I> {
    private readonly filePath;
    constructor(filePath?: string);
    read<T extends I>(): T;
    add<T>(newData: T): void;
    write<T extends I>(data: T): void;
}
