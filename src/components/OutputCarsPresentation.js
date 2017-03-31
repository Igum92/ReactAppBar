import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        overflowY: 'auto',
    },
};


const OutputCarsPresentation = ({cars}) => {
    return (
        <div style={styles.root}>

            <GridList
                cellHeight={200}
                style={styles.gridList}
                cols={3}
            >
                <Subheader>Cars:</Subheader>
                { cars.map((car, index) =>
                <GridTile
                    key={car.name}
                    title={car.name}
                    subtitle={<span>by <b>{car.price}</b><div>{car.location}</div></span>}
                >
                    <img src={car.image} />
                </GridTile>
                )}
            </GridList>
        </div>

    );

};

export default OutputCarsPresentation;