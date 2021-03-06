const date=(state={},action) => {
    switch (action.type) {
        case "CHANGE_START_DATE":
            return {...state,
        startDate: action.date};
        case "CHANGE_END_DATE":
            return {...state,
                endDate: action.date};
        default:
            return state;
    }
};

export default date;
