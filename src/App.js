import React, {Component} from 'react';
import {connect} from "react-redux";
import AppBarSearch from './components/AppBar';
import OutputCars from './containers/OutputCars';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchCars} from "./actions/actions";


class App extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCars());
    }

    render() {
        return <MuiThemeProvider>
            <div>
                <AppBarSearch/>
                <OutputCars/>
            </div>
        </MuiThemeProvider>
    }
}


export default connect()(App);
