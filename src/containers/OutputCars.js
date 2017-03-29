import React from 'react';
import {connect} from "react-redux";
import OutputCarsPresentation from "../components/OutputCarsPresentation";

const mapStateToProps = (state) => {
    return state.cars.cars ?
    {
        cars: state.cars.cars.map((car)=>({
            name: car.vehicle,
            price: car.price_all_days,
            image: state.cars.images.filter((image)=> image.id === car.image_id)[0],
            location: car.location ? car.location.pick_up ? car.location.pick_up.address :undefined : undefined
        }))
    } : {}
};

const OutputCars = connect(mapStateToProps)(OutputCarsPresentation);

export default OutputCars;
