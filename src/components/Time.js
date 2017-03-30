import React from 'react';
import TimePicker from 'material-ui/TimePicker';

const TimePresentation = ({handleChangeStartTime, handleChangeEndTime}) => (
    <div style={{fontSize: 11, margin: '0 10 0 0', textAlign: 'left', width: '50%', float: 'left'}}>
            Enter the time:

            <TimePicker hintText="Start day time"
                        underlineStyle={{display: "none"}}
                        format="24hr"
                        onChange={handleChangeStartTime}
                        textFieldStyle={{width: "100%"}}/>


        <div style={{fontSize: 11, margin: 0, textAlign: 'left'}}>
            <br/>
        </div>

            <TimePicker hintText="End day time"
                        underlineStyle={{display: "none"}}
                        format="24hr"
                        onChange={handleChangeEndTime}
                        textFieldStyle={{width: "100%"}}/>

    </div>
);

export default TimePresentation;
