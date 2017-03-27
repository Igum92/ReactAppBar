const suggestedCities = (state=[], action) => {

    switch (action.type) {
        case "RECEIVE_SUGGESTED_CITIES":
            // console.log(JSON.stringify(action));
            return action.cities;
        default:
            return state;

    }
};

export default suggestedCities;
