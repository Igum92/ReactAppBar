import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const DatePresentation = ({handleChangeStartDate, handleChangeEndDate}) => {
    return (
        <div>
            <DatePicker hintText="Start date"
                        underlineStyle={{display: "none"}}
                        onChange={handleChangeStartDate}/>

            <div style={{fontSize: 11, margin: 0, textAlign: 'left'}}>
                to:
            </div>

            <DatePicker hintText="End date" mode="landscape"
                        underlineStyle={{display: "none"}}
                        onChange={handleChangeEndDate}/>
        </div>
    );

};

export default DatePresentation;
