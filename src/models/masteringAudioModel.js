import axios from "axios";
import { handleApiResponseError } from "../utils/apiErrorHandler";
import { audioApiService } from "../services/audioApiService";
import { AUDIO_API_KEY, soundTemplate as defaultSoundTemplate } from "../constants/config";



export const masteringAudioModel = async ( scriptId, callback = {} ) => {
    try {
        var data = JSON.stringify( { scriptId, soundTemplate: defaultSoundTemplate } );

        var config = {
            method: 'POST',
            url: audioApiService.MASTERING,
            headers: {
                'x-api-key': AUDIO_API_KEY,
                'Content-Type': 'application/json'
            },
            data: data
        };

        const { data: response } = await axios( config );
        if ( response.warnings === "" ) {
            if ( callback.success ) {
                callback.success( response )
            }
        } else {
            if ( callback.error ) {
                callback.error( response.warnings )
            }
        }



    } catch ( error ) {
        console.log( "error", error );
        handleApiResponseError( "Something went wrong, could't create audio" );
    }



}