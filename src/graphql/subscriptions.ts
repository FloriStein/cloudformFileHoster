/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onFileMetadataAdded = /* GraphQL */ `subscription OnFileMetadataAdded {
  onFileMetadataAdded {
    fileName
    s3Path
    bucketName
    fileSize
    uploadedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnFileMetadataAddedSubscriptionVariables,
  APITypes.OnFileMetadataAddedSubscription
>;
export const onFileDeletion = /* GraphQL */ `subscription OnFileDeletion {
  onFileDeletion {
    fileName
    message
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnFileDeletionSubscriptionVariables,
  APITypes.OnFileDeletionSubscription
>;
