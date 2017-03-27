import OutputCarsPresentation from "../components/OutputCarsPresentation";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

const OutputCars = connect(mapStateToProps)(OutputCarsPresentation);
export default OutputCars;