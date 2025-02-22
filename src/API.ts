/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type FileMetadata = {
  __typename: "FileMetadata",
  fileName: string,
  s3Path: string,
  bucketName: string,
  fileSize: number,
  uploadedAt: string,
};

export type FileDeletionNotification = {
  __typename: "FileDeletionNotification",
  fileName: string,
  message: string,
};

export type AddFileMetadataMutationVariables = {
  fileName: string,
  s3Path: string,
  bucketName: string,
  fileSize: number,
  uploadedAt: string,
};

export type AddFileMetadataMutation = {
  addFileMetadata?:  {
    __typename: "FileMetadata",
    fileName: string,
    s3Path: string,
    bucketName: string,
    fileSize: number,
    uploadedAt: string,
  } | null,
};

export type NotifyFileDeletionMutationVariables = {
  fileName: string,
};

export type NotifyFileDeletionMutation = {
  notifyFileDeletion?:  {
    __typename: "FileDeletionNotification",
    fileName: string,
    message: string,
  } | null,
};

export type GetFileMetadataQueryVariables = {
  fileName: string,
};

export type GetFileMetadataQuery = {
  getFileMetadata?:  {
    __typename: "FileMetadata",
    fileName: string,
    s3Path: string,
    bucketName: string,
    fileSize: number,
    uploadedAt: string,
  } | null,
};

export type OnFileMetadataAddedSubscriptionVariables = {
};

export type OnFileMetadataAddedSubscription = {
  onFileMetadataAdded?:  {
    __typename: "FileMetadata",
    fileName: string,
    s3Path: string,
    bucketName: string,
    fileSize: number,
    uploadedAt: string,
  } | null,
};

export type OnFileDeletionSubscriptionVariables = {
};

export type OnFileDeletionSubscription = {
  onFileDeletion?:  {
    __typename: "FileDeletionNotification",
    fileName: string,
    message: string,
  } | null,
};
