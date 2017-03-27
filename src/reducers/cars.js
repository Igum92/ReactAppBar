const cars = (state = [], action)=> {
    console.log(JSON.stringify(action.cars));
    switch (action.type) {
        case "RECEIVE_CARS":
            return action.cars;
        default:
            return state;
    }
};


    export default cars;

