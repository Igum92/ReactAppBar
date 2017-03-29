import React from 'react';

const OutputCarsPresentation = ({cars}) => {
    return (
        <div>
            { cars ?
                cars.map((car, index) =>
                    <div key={index}>
                        <div>
                            {car.name}
                        </div>

                        {car.image ?
                        <div>
                            <img src={car.image.url}/>
                        </div>
                        : null }
                        <div>
                            Price all days: {car.price}
                        </div>
                        {car.location ?
                            <div>
                                Address: {car.location}
                            </div>
                        : null }
                        <hr/>
                    </div>
                ) : null}
        </div>
    );

};

export default OutputCarsPresentation;