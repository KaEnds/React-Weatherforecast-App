export const REQUSET_DATA = "REQUEST_DATA"
export const REQUEST_SUCCESS = "REQUEST_SUCCESS"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const GETAIRQUALITY = "GETAIRQUALITY"

export const requestData = () => {
    return{
        type: REQUSET_DATA
    }
}

export const requestSuccess = (payload) => {
    return {
        type: REQUEST_SUCCESS,
        payload: payload,
    }
}

export const requestFailure = (err) => {
    return {
        type: REQUEST_FAILURE,
        payload: err
    }
}

export const getairqual = (qual) => {
    return {
        type: GETAIRQUALITY,
        payload: qual
    }
}

