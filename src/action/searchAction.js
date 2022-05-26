export const SEARCH_LOCATE = "SEARCH_LOCATE"
export const ADD_LATLONG = "ADD_LATLONG"

export const serachAction = (location) => {
    return{
        type: SEARCH_LOCATE,
        payload: location
    }
}

export const LatLong = (Lat, Long) => {
    return{
        type: ADD_LATLONG,
        payload: {Lat, Long}

    }
}