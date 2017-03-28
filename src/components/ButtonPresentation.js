import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonPresentation = ({onClick, label, float, city, endDate, startDate}) => (
    <div>
        <RaisedButton
            label={label}
            primary={true}
            onTouchTap={()=>onClick(city, startDate, endDate)}
            style={{boxShadow: 'none', marginRight: 10}}/>
    </div>
);

export default ButtonPresentation;