import {useState} from "react";
export let getCars;

const saveCar = ({model, price, year}) => {
    fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })

        .then((response) => response.json())
        .then(value => {
            fetch('http://195.72.146.25/api/v1/cars')
                .then(response => response.json())
                .then(value => (getCars=(value)=>{
                    return value;
            })
                )
        })
}
console.log(getCars);
export {saveCar}
