import {connect} from "react-redux";
import Time from "../components/Time";
import {startTimeChanged} from "../actions/actions";
import {endTimeChanged} from "../actions/actions";

const mapStateToProps = (state) => ({
    time: state.time
});

const mapDispatchToProps = (dispatch) => ({

    handleChangeStartTime: (event, time) => {
        dispatch(startTimeChanged(time));
    },

    handleChangeEndTime: (event, time) => {
        dispatch(endTimeChanged(time));
    }
});

const TimeContainer = connect(mapStateToProps, mapDispatchToProps)(Time);

export default TimeContainer;