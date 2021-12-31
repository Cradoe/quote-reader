import axios from "axios";
import { handleApiResponseError } from "../utils/apiErrorHandler";
import { audioApiService } from "../services/audioApiService";
import { AUDIO_API_KEY, speechConfig } from "../constants/config";




export const createSpeechModel = async ( scriptId, callback = {} ) => {
    try {
        var data = JSON.stringify( { scriptId, ...speechConfig } );

        var config = {
            method: 'POST',
            url: audioApiService.CREATE_SPEECH,
            headers: {
                'x-api-key': AUDIO_API_KEY,
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            data: data
        };

        const { data: response } = await axios( config );
        if ( response.default && response.default.status_code && Number( response.default.status_code ) === 201 ) {
            if ( callback.success ) {
                callback.success( response )
            }
        } else {
            if ( callback.error ) {
                callback.error( response )
            }
        }



    } catch ( error ) {
        console.log( "error", error );
        handleApiResponseError( "Something went wrong, could't create audio" );
    }



}