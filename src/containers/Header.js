import {connect} from "react-redux";
import Search from "../components/Search";
import {cityChanged} from "../actions/actions";
import {getSuggestedCities} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        city: state.city,
        suggestedCities: state.suggestedCities,
    }
};

const mapDispatchToProps = (dispatch) => ({
    handleCityInputChange: (text, suggestedCities) => {
        dispatch(getSuggestedCities(text));
        let filtered = suggestedCities.filter((city)=>( city.PlaceName === text));

        if (filtered.length != 0) {
            dispatch(cityChanged(filtered[0].PlaceId));
        }
    }
});

const Header = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Header;