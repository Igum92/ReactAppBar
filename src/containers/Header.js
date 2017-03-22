import {connect} from "react-redux";
import Search from "../components/Search";
import {cityChanged} from "../actions/actions";

const mapStateToProps = (state) => ({
    city: state.city
});

const mapDispatchToProps = (dispatch) => ({
    handleCityInputChange: (city) => dispatch(cityChanged(city))
});

const Header = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Header;