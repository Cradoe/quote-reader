import axios from "axios";
import { handleApiResponseError } from "../utils/apiErrorHandler";
import { quoteApiService } from "../services/quoteApiService";

export const listAuthorsModel = async ( callback = {}, page = 1 ) => {
    try {
        const response = await axios.get( quoteApiService.LIST_AUTHORS( page ) );
        const { count, results, totalPages } = response.data;

        if ( count > 0 && results && results.length > 0 ) {
            if ( callback.success ) {
                callback.success( { items: results, totalPages } )
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
