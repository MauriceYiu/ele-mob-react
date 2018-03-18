import * as actionTypes from './../constants/city';

export const saveGeoHash = (geohash)=>{
    return {
        type:actionTypes.SAVE_GEO_HASH,
        geohash
    }
}