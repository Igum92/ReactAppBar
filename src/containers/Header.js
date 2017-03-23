import {connect} from "react-redux";
import Search from "../components/Search";
import {cityChanged} from "../actions/actions";
import {getSuggestedCities} from "../actions/actions";

const mapStateToProps = (state) => ({
    city: state.city,
    suggestedCities: state.suggestedCities
});

const mapDispatchToProps = (dispatch) => ({
    handleCityInputChange: (city) => {
        dispatch(cityChanged(city));
        dispatch(getSuggestedCities(city))
    }
});

const Header = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Header;