import React from 'react';
import {connect} from "react-redux";
import OutputCarsPresentation from "../components/OutputCarsPresentation";

const mapStateToProps = (state) => {
    return {
        cars: [{
            name: 'Hyundai Solaris Sedan',
            price: '50 рублей',
            image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/4C9B1106500106F2C12576A9005DEC07/$FILE/large.jpg',
            location: 'Пушкин'
        }, {
            name: 'Ford Focus',
            price: '60 рублей',
            image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/D1252CA0BAF3D9DCC12577A800577B09/$FILE/large.jpg',
            location: 'Пушкин'
        }, {
            name: 'Hyundai Creta',
            price: '50 рублей',
            image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/C3FBBC126D3858B7C12577A80057847D/$FILE/large.jpg',
            location: 'Пушкин'
        }, {
            name: 'Ford Mondeo',
            price: '50 рублей',
            image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/84FD0BBD2EF598FAC12577A800577F23/$FILE/large.jpg',
            location: 'Пушкин'
        }, {
            name: 'Nissan X-Trail',
            price: '70 рублей',
            image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/00719751B250AA33C12577A8005780D5/$FILE/large.jpg',
            location: 'Пушкин'
        }, {
            name: 'Mercedes E200',
            price: '60 рублей',
            image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/3A3A19D4C9C8E6E4C12577A8005782A2/$FILE/large.jpg',
            location: 'Пушкин'
        }, {
                name: 'Mercedes E2001',
                price: '60 рублей',
                image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/3A3A19D4C9C8E6E4C12577A8005782A2/$FILE/large.jpg',
                location: 'Пушкин'
            }, {
                name: 'Mercedes E2002',
                price: '60 рублей',
                image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/3A3A19D4C9C8E6E4C12577A8005782A2/$FILE/large.jpg',
                location: 'Пушкин'
            }, {
                name: 'Mercedes E2003',
                price: '60 рублей',
                image: 'http://www.avisrussia.ru/avisonline/fleet.nsf/(UNID)/3A3A19D4C9C8E6E4C12577A8005782A2/$FILE/large.jpg',
                location: 'Пушкин'
            }]

        //     state.cars.cars.map((car)=>({
        //     name: car.vehicle,
        //     price: car.price_all_days,
        //     image: state.cars.images.filter((image)=> image.id === car.image_id)[0],
        //     location: car.location ? car.location.pick_up ? car.location.pick_up.address :undefined : undefined
        // }))
    }
};

const OutputCars = connect(mapStateToProps)(OutputCarsPresentation);

export default OutputCars;
