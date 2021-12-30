import { quoteActions } from "../actions";
import { quoteInitialState } from "./initialState";



export const quoteReducer = ( state = quoteInitialState, action ) => {

    switch ( action.type ) {
        case quoteActions.LIST_ALL:
            return {
                ...state,
                ...action.payload
            };

        default:
            return state;
    }
};
