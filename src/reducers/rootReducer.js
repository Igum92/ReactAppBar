import {combineReducers} from 'redux'
import city from "./city";
import suggestedCities from "./suggestedCities";
import cars from "./cars";
import date from "./date";
import time from "./time";



const rootReducer = combineReducers({
 city,
 cars,
 suggestedCities,
 date,
 time
});

export default rootReducer;
