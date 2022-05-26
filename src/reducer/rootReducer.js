import { combineReducers } from "redux"
import { Datareducer } from './dataReducer'
import { searchReducer } from './searchlocation'
import { AirReducer } from './AirqualityReducer'

export const rootReducer = combineReducers({
    data: Datareducer,
    searchURL: searchReducer,
    airQual:  AirReducer
})