import {combineReducers} from 'redux'
import city from "./city";
import suggestedCities from "./suggestedCities";



const rootReducer = combineReducers({
 city,
 suggestedCities
});

export default rootReducer;
