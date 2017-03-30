const time=(state={},action) => {
    console.log(action.type);
    switch (action.type) {
        case "CHANGE_START_TIME":
            return {...state,
                startTime: action.time};
        case "CHANGE_END_TIME":
            return {...state,
                endTime: action.time};
        default:
            return state;
    }
};

export default time;
