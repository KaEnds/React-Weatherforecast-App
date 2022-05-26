export const FETCH_DATA = "FETCH_DATA"
export const FETCH_LOADING = "FETCH_LOADING"
export const FETCH_FAIL = "FETCH_FAIL"

export const applyData = (data) => {
    return{
        type: FETCH_DATA,
        payload: data
    }
}
export const loading = () => {
    return{
        type: FETCH_LOADING
    }
}


