import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { audioPlayerModel } from "../../models/audioPlayerModel";

const useAudio = url => {
    const [ audio ] = useState( new Audio( url ) );
    const player = useSelector( state => state.audio.player )
    const dispatch = useDispatch();

    const togglePlayer = () => {
        dispatch( audioPlayerModel( {
            mode: !player.mode,
            url
        } ) )
    };

    useEffect( () => {
        if ( player.url === url ) {
            player.mode ? audio.play() : audio.pause();
        } else {
            audio.pause();
        }
    },

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [ player, url ]
    );

    useEffect( () => {
        if ( player.url === url && player.mode ) {
            audio.addEventListener( 'ended', togglePlayer );
            return () => {
                audio.removeEventListener( 'ended', togglePlayer );
            };
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ player, url ] );


    return [ player, togglePlayer ];
};


const AudioPlayerButton = ( { url } ) => {
    const [ player, togglePlayer ] = useAudio( url );

    useEffect( () => {
        togglePlayer();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <>


            <button onClick={togglePlayer} type="button" className="bg-white text-gray-900 dark:bg-gray-100 dark:text-gray-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-gray-900/5 shadow-md flex items-center justify-center" aria-label="Pause">

                {player.url === url && player.mode ?
                    <svg className="" width="30" height="32" fill="currentColor">
                        <rect x="6" y="4" width="4" height="24" rx="2" />
                        <rect x="20" y="4" width="4" height="24" rx="2" />
                    </svg>
                    :
                    <svg className="max-h-full max-w-ful" viewBox="0 0 1280.000000 1280.000000" >
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                            fill="currentColor">
                            <path d="M4620 6400 c0 -2286 3 -2861 13 -2857 6 2 939 540 2072 1194 1133
654 2243 1295 2467 1424 315 181 404 237 395 246 -7 6 -311 184 -677 396 -366
211 -1469 848 -2452 1415 -983 568 -1794 1035 -1803 1038 -13 6 -15 -288 -15
-2856z"/>
                        </g>
                    </svg>
                }


            </button>
        </>
    )
}

export default AudioPlayerButton