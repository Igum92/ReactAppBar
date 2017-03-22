const cities = (state = "", action) => {
    console.log(JSON.stringify(action));
    switch (action.type) {
        case "CHANGE_CITY":
            return action.city;

        default:
            return state;
    }

};

export default cities;
