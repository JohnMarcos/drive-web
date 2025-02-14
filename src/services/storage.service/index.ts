import fileService from '../file.service';
import folderService from '../folder.service';
import upload from './storage-upload.service';
import { DriveFileData, DriveFolderData, DriveItemData } from '../../models/interfaces';

export function deleteItems(items: DriveItemData[]): Promise<void> {
  const promises: Promise<void>[] = [];

  for (const item of items) {
    promises.push(
      item.isFolder
        ? folderService.deleteFolder(item as DriveFolderData).then()
        : fileService.deleteFile(item as DriveFileData).then(),
    );
  }

  return Promise.all(promises).then();
}

export function moveItem(item: DriveItemData, destinationFolderId: number): Promise<void> {
  return item.isFolder
    ? folderService.moveFolder({ folderId: item.id, destination: destinationFolderId }).then()
    : fileService.moveFile({ fileId: item.fileId, destination: destinationFolderId }).then();
}

const storageService = {
  deleteItems,
  moveItem,
  upload,
};

export default storageService;
