import React from 'react';
import {connect} from "react-redux";
import Button from "../components/Button";
import {fetchCars} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        float: 'left',
        label: 'Search',
        city: state.city,
        startDate: state.date.startDate,
        endDate: state.date.endDate,
        startTime: state.time.startTime,
        endTime: state.time.endTime
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (city, startDate, endDate, startTime, endTime) => dispatch(fetchCars(city, startDate, endDate, startTime, endTime))
});

const SearchButton = connect(mapStateToProps, mapDispatchToProps)(Button);
export default SearchButton;