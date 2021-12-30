export const catchApiRequestError = ( error ) => {
  if ( error && error.message ) {
    return error.message;
  }
  // console.log( error );
  return "Opps! The server has encountered a temporary error.";
};
export const handleApiResponseError = ( response ) => {
  if ( response && response.message ) {
    return response.message;
  }
  // console.log( response );
  return "Opps! The server has encountered a temporary error.";
};
