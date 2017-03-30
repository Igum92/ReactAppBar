import React from 'react';
import DatePicker from 'material-ui/DatePicker';

const DatePresentation = ({handleChangeStartDate, handleChangeEndDate}) => {
    return (

        <div style={{fontSize: 11, margin: '0', textAlign: 'left', width: '50%', float: 'left'}}>
            Enter the date:

            <DatePicker hintText="Start date"
                        underlineStyle={{display: "none"}}
                        onChange={handleChangeStartDate}
                        textFieldStyle={{width: "60%"}}
            />

            <div style={{fontSize: 11, margin: 0, textAlign: 'left'}}>
                to:
            </div>

            <DatePicker hintText="End date"
                        underlineStyle={{display: "none"}}
                        onChange={handleChangeEndDate}
                        textFieldStyle={{width: "60%"}}
            />
        </div>

    );

};

export default DatePresentation;
