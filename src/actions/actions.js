
export const cityChanged = (city) => ({
    type: "CHANGE_CITY",
    city
});

const receiveSuggestedCities = (cities) => ({
    type: "RECEIVE_SUGGESTED_CITIES",
    cities
});

export const getSuggestedCities = (str) => {

    return function (dispatch) {
        if (str != '') {
            fetch('http://localhost:1081/autosuggest?query=' + encodeURIComponent(str),
                {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(json => dispatch(receiveSuggestedCities(json)));
        }
    }
};

export const carsReceived = (cars) => ({
    type: "RECEIVE_CARS",
    cars
});

const changeDateFormat = (date) => {
    return getDateString(date);
};

function getDateString(date) {
    const year = date.getFullYear();
    const month = zerofill(date.getMonth()+1);
    const day = zerofill(date.getDate());
    return year + '-' + month + '-' + day;
}

function zerofill(i) {
    return (i < 10 ? '0' : '') + i;
}

export function fetchCars(city, startDate, endDate) {
    return function (dispatch) {
        if (city != '' && startDate != '' && endDate != '') {
            fetch('http://localhost:1081/car?city=' + encodeURIComponent(city) + '&start_date=' + encodeURIComponent(changeDateFormat(startDate)) + 'T10:00&end_date=' + encodeURIComponent(changeDateFormat(endDate)) + 'T17:00')
                .then(response => response.json())
                .then(function (cars) {
                        dispatch(carsReceived(cars));
                    }
                );
        }
    }
}

export const startDateChanged = (startDate) => ({
    type: "CHANGE_START_DATE",
    date: startDate
});

export const endDateChanged = (endDate) => ({
    type: "CHANGE_END_DATE",
    date: endDate
});


