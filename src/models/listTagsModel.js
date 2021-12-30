import axios from "axios";
import { handleApiResponseError } from "../utils/apiErrorHandler";
import { quoteApiService } from "../services/quoteApiService";

export const listTagsModel = async ( callback = {} ) => {
    try {
        const response = await axios.get( quoteApiService.LIST_TAGS );

        if ( response.data && response.data.length > 0 ) {
            if ( callback.success ) {
                callback.success( response.data )
            }
        } else {
            if ( callback.error ) {
                callback.error()
            }
        }

    } catch ( error ) {
        handleApiResponseError( error.response )
    }

}
