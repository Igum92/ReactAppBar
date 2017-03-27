import React from 'react';

const OutputCarsPresentation = ({cars}) => {
        return (
            <div>
                { cars ?
                    <div>
                        {(Object.values(cars)).join(", ")}
                    </div>
                : null }
            </div>
        );

};

export default OutputCarsPresentation;