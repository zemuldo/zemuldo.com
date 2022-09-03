const { BlobServiceClient } = require('@azure/storage-blob');

const { AZURE_STORAGE_CONNECTION_STRING } = process.env;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  AZURE_STORAGE_CONNECTION_STRING
);


module.exports = blobServiceClient;