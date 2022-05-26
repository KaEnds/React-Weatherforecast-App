import { FETCH_DATA, FETCH_LOADING, loading } from '../action/dataAction'

const initialState = {
    data: {forecast: [
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
        {day: 'loading...', date: null, low: null, high: null, text: null},
    ]},
    loading: true
}

export const Datareducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:

            return {
                ...state,
                data: loading ? action.payload : {},
                loading: false
            }
            
        case FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
            
    
        default:
            return state
    }
}