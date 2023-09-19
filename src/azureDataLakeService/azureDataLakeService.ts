import { DataLakeFileSystemClient, DataLakeServiceClient, StorageSharedKeyCredential } from '@azure/storage-file-datalake';

export class AzureDataLakeService {
  private _client: DataLakeServiceClient;
  constructor(accountName: string, accountKey: string) {
    this._client = this.getDataLakeServiceClient(accountName, accountKey);
  }

  private getDataLakeServiceClient(accountName: string, accountKey: string) {
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
    const dataLakeServiceClient = new DataLakeServiceClient(`https://${accountName}.dfs.core.windows.net`, sharedKeyCredential);
    return dataLakeServiceClient;
  }

  private async fileSystemClient(fileSystemName: string): Promise<DataLakeFileSystemClient> {
    const fileSysemClient = this._client.getFileSystemClient(fileSystemName);
    await fileSysemClient.createIfNotExists();
    return fileSysemClient;
  }

  public async createDirectory(fileSystemName: string, directoryName: string): Promise<void> {
    const fileSystemClient = await this.fileSystemClient(fileSystemName);
    const directoryClient = fileSystemClient.getDirectoryClient(directoryName);
    await directoryClient.createIfNotExists();
  }

  public async uploadFile(fileSystemName: string, directory: string, fileName: string, data: Buffer | Blob | ArrayBuffer | ArrayBufferView): Promise<any> {
    const fileSystemClient = await this.fileSystemClient(fileSystemName);
    this.createDirectory(fileSystemName, directory);
    const fileClient = fileSystemClient.getFileClient(`${directory}/${fileName}`);
    return await fileClient.upload(data);
  }
}
