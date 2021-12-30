import axios from "axios";
import { quoteActions } from "../redux/actions";
import { handleApiResponseError } from "../utils/apiErrorHandler";
import { quoteApiService } from "../services/quoteApiService";


const setQuoteList = ( payload ) => {
    return {
        type: quoteActions.LIST_ALL,
        payload
    };
};


export const listQuotesModel = ( callback = {}, page = 1 ) => {
    return async ( dispatch ) => {
        try {
            const response = await axios.get( quoteApiService.LIST_QUOTES( page ) );
            const { count, results, totalPages } = response.data;

            if ( count > 0 && results && results.length > 0 ) {
                dispatch( setQuoteList( {
                    page,
                    totalPages,
                    items: results
                } ) );
            } else {
                handleApiResponseError( response.data );
            }

        } catch ( error ) {
            handleApiResponseError( error.response )
        }

    }

}