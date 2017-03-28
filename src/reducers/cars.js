const cars = (state = [], action)=> {
    switch (action.type) {
        case "RECEIVE_CARS":
            return action.cars;
        default:
            return state;
    }
};


    export default cars;

