import { ActionType } from '../action-types';

interface AddToFavouritesAction {
    type: ActionType.ADD_TO_FAVOURITES;
    payload: string;
}

interface RemoveFromFavouritesAction {
    type: ActionType.REMOVE_FROM_FAVOURITES;
    payload: string;
}

export type Action = AddToFavouritesAction | RemoveFromFavouritesAction;
