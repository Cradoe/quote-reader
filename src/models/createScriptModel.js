import axios from "axios";
import { audioActions } from "../redux/actions";
import { handleApiResponseError } from "../utils/apiErrorHandler";
import { audioApiService } from "../services/audioApiService";
import { AUDIO_API_KEY } from "../constants/config";


const addScript = ( payload ) => {
    return {
        type: audioActions.ADD_SCRIPT,
        payload
    };
};


export const createScriptModel = ( { content, quoteId }, callback = {} ) => {
    return async ( dispatch ) => {
        try {
            var data = JSON.stringify( { "scriptText": content } );

            var config = {
                method: 'post',
                url: audioApiService.CREATE_SCRIPT,
                headers: {
                    'x-api-key': AUDIO_API_KEY,
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const response = await axios( config );

            dispatch( addScript( { scriptId: response.data.scriptId, quoteId } ) );
            if ( callback.success ) {
                callback.success( response.data )
            }


        } catch ( error ) {
            // console.log( "error", error );
            handleApiResponseError( "Something went wrong, could't create script" );
        }

    }

}