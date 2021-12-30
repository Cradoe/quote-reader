import { audioActions } from "../redux/actions";


const modifyPlayer = ( payload ) => {
    return {
        type: audioActions.MODIFY_PLAYER,
        payload
    };
};


export const audioPlayerModel = ( config ) => {
    return async ( dispatch ) => {
        dispatch( modifyPlayer( config ) );
    }

}