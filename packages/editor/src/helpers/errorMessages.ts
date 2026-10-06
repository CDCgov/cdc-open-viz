export const maxFileSize = 10 // Represents number of MB. Maybe move this to a prop eventually but static for now.

export const errorMessages = {
  emptyCols:
    'It looks like your column headers are missing some data. Please make sure all of your columns have titles and upload your file again.',
  emptyData: 'Your data file is empty.',
  dataType: 'Your datatype is not supported.',
  fileType: 'The file type that you are trying to upload is not supported.',
  formatting: 'Please check the formatting of your data file.',
  failedFetch: 'Error fetching or parsing data file.',
  unchangedLiveUrl:
    'This data source already loads live from this URL, so there is nothing to save or replace. COVE automatically uses the latest data at this address. Column names at a live URL must remain stable. To rename columns, publish the updated data at a new URL before changing the existing source.',
  urlInvalid: 'Please make sure to use a valid URL.',
  cannotReach: "Cannot reach URL, please make sure it's correct.",
  fileTooLarge: `File is too large. Maximum file size is ${maxFileSize}MB.`
}
