import {REQUEST_FAILURE, REQUEST_SUCCESS, REQUSET_DATA, GETAIRQUALITY} from '../action/AirAction'

const initialState = {
    loading: false,
    aqi: {},
    components: [],
    err: '',
    data: {},
    Date: []
    
}

export const AirReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUSET_DATA:
            return{
                ...state,
                loading: true
            }

        case REQUEST_SUCCESS:
            return{
                ...state,
                loading: false,
                aqi: action.payload.list[0].main,
                data: action.payload,
                
            }

        case REQUEST_FAILURE:
            return{
                ...state,
                loading: false,
                err: action.payload
            }

        case GETAIRQUALITY: 
            return{
                ...state,
                Date: action.payload.list.map(e => e.dt),
                components: action.payload.list.map(e => e.components)
            }
    
        default:
            return state
    }
}

