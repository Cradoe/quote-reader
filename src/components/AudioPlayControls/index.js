import React, { useState, useEffect } from "react";
import AudioPlayerButton from "../AudioPlayerButton";
import LoadAudioButton from "../LoadAudioButton";
import { useDispatch } from "react-redux";
import { createScriptModel } from "../../models/createScriptModel";
import { createSpeechModel } from "../../models/createSpeechModel";







const AudioPlayControls = ( { content, id: quoteId } ) => {

    const [ loadedAudio, setLoadedAudio ] = useState( null ),
        [ scriptId, setScriptId ] = useState( null ),
        [ hasCreatedSpeech, setHasCreatedSpeech ] = useState( false );



    const dispatch = useDispatch();

    const convertTextToSpeech = () => {
        createScript()
    };

    const createScript = () => {
        const
            successCallback = ( data ) => {
                setScriptId( data.scriptId );
            },
            errorCallback = ( error ) => {
                alert( error );
            },
            callback = {
                success: successCallback,
                error: errorCallback,
            };
        console.log( "content", content );
        dispatch( createScriptModel( { content, quoteId }, callback ) );

    }
    const createAndLoadAudio = () => {
        convertTextToSpeech();
    }


    useEffect( () => {
        if ( scriptId && !hasCreatedSpeech ) {
            const
                successCallback = ( data ) => {
                    setHasCreatedSpeech( true );
                    setLoadedAudio( data.default.url );
                },
                errorCallback = ( error ) => {
                    alert( error );
                },
                callback = {
                    success: successCallback,
                    error: errorCallback,
                };
            createSpeechModel( scriptId, callback );

        }
    }, [ scriptId, hasCreatedSpeech ] )
    return (
        <>
            {loadedAudio ?
                <AudioPlayerButton url={loadedAudio} />
                :
                <LoadAudioButton onClick={createAndLoadAudio} />
            }
        </>

    )
}

export default AudioPlayControls;