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

export function fetchCars(dispatch) {
    return function (dispatch) {
        return fetch('http://localhost:1081/car?city=EDI&start_date=2017-07-01&end_date=2017-07-07')
            .then(response => response.json())
            .then(function (cars) {
                    dispatch(carsReceived(cars));
                }
            );
    }
}

// export const getSuggestedCars = (str) => {
//     console.log(str);
//     return function (dispatch) {
//         if (str != '') {
//             fetch('http://localhost:1081/car?city=EDI&start_date=2017-07-01&end_date=2017-07-07',
//                 {
//                     method: 'get',
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded',
//                         'Accept': 'application/json'
//                     }
//                 })
//                 .then(response => response.json())
//                 .then(json => dispatch(receiveSuggestedCities(json)));
//         }
//     }
// };