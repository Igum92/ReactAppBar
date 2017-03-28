import {combineReducers} from 'redux'
import city from "./city";
import suggestedCities from "./suggestedCities";
import cars from "./cars";
import date from "./date";



const rootReducer = combineReducers({
 city,
 cars,
 suggestedCities,
 date
});

export default rootReducer;
