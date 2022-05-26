import { SEARCH_LOCATE, ADD_LATLONG } from '../action/searchAction'

const initialState = {
    weather: {
        url: 'https://yahoo-weather5.p.rapidapi.com/weather?location=phetchabun&format=json&u=f',
        province: '',
        matching: false
    },
    air: {
        url: 'http://api.openweathermap.org/data/2.5/air_pollution?lat=16.41984&lon=101.157829&appid=9693a844b6237a1d186b6ae4226e0598'
    },
    searchCount: 0,
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_LOCATE:
            const fulUrl = 'https://yahoo-weather5.p.rapidapi.com/weather?location='+ action.payload +'&format=json&u=f'
            return{
                ...state,
                weather: {
                    url: fulUrl,
                    province: action.payload,
                },
                searchCount: state.searchCount + 1
                
            }

        case ADD_LATLONG: 
            const addlocate = 'http://api.openweathermap.org/data/2.5/air_pollution?lat='+ action.payload.Lt +'&lon='+ action.payload.Lng +'&appid=9693a844b6237a1d186b6ae4226e0598'
            return{
                ...state,
                air: {
                    url: addlocate
                }
            }
    
        default:
            return state
    }
}