import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = ({onClick, label, float, city, endDate, startDate, startTime, endTime}) => (
    <div>
        <RaisedButton
            label={label}
            primary={true}
            onTouchTap={()=>onClick(city, startDate, endDate, startTime, endTime)}
            style={{boxShadow: 'none', marginRight: 10}}/>
    </div>
);

export default Button;