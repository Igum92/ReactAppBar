const city = (state = "", action) => {

    switch (action.type) {
        case "CHANGE_CITY":
            return action.city;

        default:
            return state;
    }

};

export default city;
