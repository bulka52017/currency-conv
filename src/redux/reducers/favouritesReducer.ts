import { ActionType } from '../action-types';
import { Action } from '../actions';

const initState: string[] = [];

const favouritesReducer = (state: string[] = initState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_TO_FAVOURITES:
            return state.includes(action.payload) ? state : [...state, action.payload];
        case ActionType.REMOVE_FROM_FAVOURITES:
            return state.filter((item) => item !== action.payload);
        default:
            return state;
    }
};

export default favouritesReducer;
