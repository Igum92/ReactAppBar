import {combineReducers} from 'redux'
import city from "./city";
import suggestedCities from "./suggestedCities";
import cars from "./cars";



const rootReducer = combineReducers({
 city,
 cars,
 suggestedCities
});

export default rootReducer;
