import {connect} from "react-redux";
import DatePresentation from "../components/DatePresentation";
import {startDateChanged} from "../actions/actions";
import {endDateChanged} from "../actions/actions";

const mapStateToProps = (state) => ({
    date: state.date
});

const mapDispatchToProps = (dispatch) => ({

    handleChangeStartDate: (event, date) => {
        console.log(date);
        dispatch(startDateChanged(date));
    },

    handleChangeEndDate: (event, date) => {
        dispatch(endDateChanged(date));
    }
});

const Date = connect(mapStateToProps, mapDispatchToProps)(DatePresentation);

export default Date;
