import React from 'react';
import {connect} from "react-redux";
import {carsReceived} from "../actions/actions";
import ButtonPresentation from "../components/ButtonPresentation";
import {fetchCars} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        float: 'left',
        label: 'Search',
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(fetchCars())
});

const SearchButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default SearchButton;