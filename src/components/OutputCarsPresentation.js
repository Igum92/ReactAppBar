import React from 'react';

const OutputCarsPresentation = ({cars}) => {
    console.log(cars);


        return (
            <div>
                { cars ?
                    <div>
                        {Object.values(cars)}
                    </div>
                : null }
            </div>
        );

};

export default OutputCarsPresentation;