import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    paddingLeft: 10,
    marginTop: 5,
     height: '80px',
    width: '250px',
    float: 'left',
    textAlign: 'center',
    lineHeight: '20px'
};

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 1, dataSource: []};
    }

    handleChange = (event, index, value) => this.setState({value});


    handleUpdateInput = (value) => {
        this.setState({
            dataSource: [
                value,
                value + value,
                value + value + value,
            ],
        });
    };

    render() {
        return (
            <div>
                <Paper style={{...style, marginLeft: 1}} zDepth={1} >
                    <div style={{fontSize: 11, margin: 0, textAlign: 'left'}}>
                        Choose city
                    </div>
                    <AutoComplete
                        hintText="Choose city"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        underlineStyle={{display: "none"}}

                    />
                </Paper>

                <Paper style={style} zDepth={1} >
                    <div style={{fontSize: 11, margin: 0, textAlign: 'left'}}>
                        Max Price
                    </div>
                    <AutoComplete
                        hintText="Enter max price"
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        underlineStyle={{display: "none"}}

                    />
                </Paper>

                <Paper style={style} zDepth={1} >
                    <div style={{fontSize: 11, margin: 0, textAlign: 'left'}}>
                        Min rooms
                    </div>
                    <DropDownMenu value={this.state.value}
                                  onChange={this.handleChange}
                                  labelStyle={{overflow: "visible"}}
                                  underlineStyle={{display: "none"}}>
                        <MenuItem value={1} primaryText="1 room"/>
                        <MenuItem value={2} primaryText="2 room"/>
                        <MenuItem value={3} primaryText="3 room"/>
                    </DropDownMenu>
                    <RaisedButton label="Search"
                                  labelStyle={{ textTransform: 'none'}}
                                  primary={true}
                                  style={{boxShadow: 'none', marginRight: 10}}/>
                </Paper>

            </div>
        );
    }
}