import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MapsHotel from 'material-ui/svg-icons/maps/hotel';
import IconButton from 'material-ui/IconButton';
import {black, white500} from 'material-ui/styles/colors';
import Header from '../containers/Header';


const AppBarSearch = () => {
    return (
            <AppBar style={{backgroundColor: {white500}, borderStyle: "none", boxShadow: "none", height: "300px"}}
                    title={<Header/>}
                    titleStyle={{float: "left", height: "200px"}}
                    iconStyleLeft={{width: "7%"}}
                    iconElementLeft={
                        <div>
                            <IconButton>
                                <MapsHotel color={black}/>
                            </IconButton>
                        </div>
                    }
                    iconElementRight={<div>
                        <FlatButton style={{color: black}} label="Contact"/>
                        <FlatButton style={{color: black}} label="INFO"/>
                        <FlatButton style={{color: black}} label="LOGIN"/>
                    </div>}/>
    );
};

export default AppBarSearch;
