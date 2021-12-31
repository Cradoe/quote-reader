export const catchApiRequestError = ( error ) => {
  if ( error && error.message ) {
    return error.message;
  }
  // console.log( error );
  return "Opps! The server has encountered a temporary error.";
};
export const handleApiResponseError = ( message ) => {
  alert( message );
};
