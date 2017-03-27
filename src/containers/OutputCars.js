import React from 'react';
import {connect} from "react-redux";
import OutputCarsPresentation from "../components/OutputCarsPresentation";

const mapStateToProps = (state) => {
    console.log(state.cars);
    return {
        cars: state.cars
    }
};

const OutputCars = connect(mapStateToProps)(OutputCarsPresentation);

export default OutputCars;
