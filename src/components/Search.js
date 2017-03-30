import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import SearchButton from "../containers/SearchButton";
import Date from "../containers/Date"
import TimeContainer from "../containers/TimeContainer"


const style = {
    paddingLeft: 10,
    marginTop: 5,
    height: '120px',
    width: '300px',
    float: 'left',
    textAlign: 'center',
    lineHeight: '15px',
};

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1, dataSource: []};
        console.log(JSON.stringify(this.props))
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <Paper style={{...style, marginLeft: 1}} zDepth={1}>
                    <div style={{fontSize: 11, margin: '0 5 0 0', textAlign: 'left'}}>
                        Choose city
                    </div>
                    <AutoComplete
                        hintText="Choose city"
                        dataSource={this.props.suggestedCities.map((place) => place.PlaceName)}
                        onUpdateInput={(text)=> {
                            this.props.handleCityInputChange(text, this.props.suggestedCities)
                        }
                        }
                        underlineStyle={{display: "none"}}

                    />
                </Paper>

                <Paper style={style} zDepth={1}>
                    <div style={{fontSize: 11, margin: '0 5 0 0', textAlign: 'left'}}>
                        Max Price
                    </div>
                    <AutoComplete
                        hintText="Enter max price"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        underlineStyle={{display: "none"}}

                    />
                </Paper>
                <Paper style={style} zDepth={1}>


                    <Date/>
                    <TimeContainer />

                </Paper>

                <Paper style={style} zDepth={1}>
                    <div style={{fontSize: 11, margin: '0 5 0 0', textAlign: 'left'}}>
                        Select the number of people
                    </div>
                    <DropDownMenu value={this.state.value}
                                  onChange={this.handleChange}
                                  labelStyle={{overflow: "visible"}}
                                  underlineStyle={{display: "none"}}>
                        <MenuItem value={1} primaryText="1"/>
                        <MenuItem value={2} primaryText="2"/>
                        <MenuItem value={3} primaryText="3"/>
                    </DropDownMenu>
                    <SearchButton/>
                </Paper>

            </div>
        );
    }
}