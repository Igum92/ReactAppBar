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
            fetch('http://localhost:1081?query=' + encodeURIComponent(str),
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