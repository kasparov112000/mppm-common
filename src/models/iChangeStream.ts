export enum DatabaseOperationTypes {
    update = 'update',
    replace = 'replace',
    insert = 'insert',
}

export interface IChangeStream {
    stream;
    register();
    onChangeFn(change);
    close();
}
