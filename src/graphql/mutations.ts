/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const addFileMetadata = /* GraphQL */ `mutation AddFileMetadata(
  $fileName: String!
  $s3Path: String!
  $bucketName: String!
  $fileSize: Int!
  $uploadedAt: AWSDateTime!
) {
  addFileMetadata(
    fileName: $fileName
    s3Path: $s3Path
    bucketName: $bucketName
    fileSize: $fileSize
    uploadedAt: $uploadedAt
  ) {
    fileName
    s3Path
    bucketName
    fileSize
    uploadedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.AddFileMetadataMutationVariables,
  APITypes.AddFileMetadataMutation
>;
export const notifyFileDeletion = /* GraphQL */ `mutation NotifyFileDeletion($fileName: String!) {
  notifyFileDeletion(fileName: $fileName) {
    fileName
    message
    __typename
  }
}
` as GeneratedMutation<
  APITypes.NotifyFileDeletionMutationVariables,
  APITypes.NotifyFileDeletionMutation
>;
