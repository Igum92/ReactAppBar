import React from 'react';
import {connect} from "react-redux";
import ButtonPresentation from "../components/ButtonPresentation";
import {fetchCars} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        float: 'left',
        label: 'Search',
        city: state.city,
        startDate: state.date.startDate,
        endDate: state.date.endDate
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (city, startDate, endDate) => dispatch(fetchCars(city, startDate, endDate))
});

const SearchButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default SearchButton;