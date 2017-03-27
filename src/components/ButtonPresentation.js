import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonPresentation = ({onClick, label, float, cars}) => (
    <div>
        <RaisedButton
            label={label}
            primary={true}
            onTouchTap={()=>onClick(cars)}
            style={{boxShadow: 'none', marginRight: 10}}/>
    </div>
);

export default ButtonPresentation;