/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFileMetadata = /* GraphQL */ `query GetFileMetadata($fileName: String!) {
  getFileMetadata(fileName: $fileName) {
    fileName
    s3Path
    bucketName
    fileSize
    uploadedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFileMetadataQueryVariables,
  APITypes.GetFileMetadataQuery
>;
