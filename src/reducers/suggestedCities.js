const suggestedCities = (state=[], action) => {

    switch (action.type) {
        case "RECEIVE_SUGGESTED_CITIES":
            return action.cities;
        default:
            return state;

    }
};

export default suggestedCities;
