import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const addToFavourites = (name: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_TO_FAVOURITES,
            payload: name,
        });
    };
};

export const removeFromFavourites = (name: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_FROM_FAVOURITES,
            payload: name,
        });
    };
};
