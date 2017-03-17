import React, {Component} from 'react';
import AppBarSearch from './components/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {

    render() {
        return <MuiThemeProvider>
            <AppBarSearch/>
        </MuiThemeProvider>
    }
}

export default App;
