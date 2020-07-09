import React from 'react';
import FileUpload from './FileUpload';

export default {
  FileUpload: (
    <FileUpload
      endpoint="http://localhost:9001"
      options={{
        restrictions: {
          maxFileSize: 50000000,
          maxNumberOfFiles: 1,
          minNumberOfFiles: 1,
          allowedFileTypes: ['.xlsx', '.xls'],
        },
      }}
    />
  ),
};
