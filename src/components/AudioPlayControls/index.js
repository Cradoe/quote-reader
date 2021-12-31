import React, { useState, useEffect } from "react";
import AudioPlayerButton from "../AudioPlayerButton";
import LoadAudioButton from "../LoadAudioButton";
import { useDispatch, useSelector } from "react-redux";
import { createScriptModel } from "../../models/createScriptModel";
import { createSpeechModel } from "../../models/createSpeechModel";
import { masteringAudioModel } from "../../models/masteringAudioModel";







const AudioPlayControls = ( { content, id: quoteId } ) => {

    const createdScripts = useSelector( state => state.audio && state.audio.scripts ? state.audio.scripts : null ),
        [ loadedAudio, setLoadedAudio ] = useState( null ),
        [ scriptId, setScriptId ] = useState( null ),
        [ speech, setSpeech ] = useState( null );



    const dispatch = useDispatch();

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
        dispatch( createScriptModel( { content, quoteId }, callback ) );

    }
    const createAndLoadAudio = () => {
        if ( createdScripts && createdScripts.length > 0 ) {
            const script = createdScripts.find( script => script.quoteId === quoteId );
            if ( script ) {
                setScriptId( script.scriptId );
                return;
            }
        }

        createScript()
    }


    useEffect( () => {
        if ( scriptId && !speech ) {
            const
                successCallback = ( data ) => {
                    setSpeech( data.default );
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
    }, [ scriptId, speech ] );

    useEffect( () => {
        if ( speech && !loadedAudio ) {
            const
                successCallback = ( data ) => {
                    setLoadedAudio( data.url );
                },
                errorCallback = ( error ) => {
                    alert( error );
                },
                callback = {
                    success: successCallback,
                    error: errorCallback,
                };
            masteringAudioModel( scriptId, callback );

        }
    }, [ speech, loadedAudio, scriptId ] );

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