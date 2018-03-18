import * as actionTypes from './../constants/city';

const initialState = '';
export default function geohash(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_GEO_HASH:
            state = action.geohash;
            return state;
        default:
            return state;
    }
}