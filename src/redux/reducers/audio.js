import { audioActions } from "../actions";
import { audioInitialState } from "./initialState";



export const audioReducer = ( state = audioInitialState, action ) => {

    switch ( action.type ) {
        case audioActions.ADD_SCRIPT:
            return {
                ...state,
                scripts: [ ...state.scripts, action.payload ]
            };
        case audioActions.MODIFY_PLAYER:
            return {
                ...state,
                player: action.payload
            };

        default:
            return state;
    }
};
