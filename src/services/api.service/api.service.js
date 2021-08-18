const saveCar = ({model, price, year}) => {
    fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
        .then(response=>response.json())
        .then(value => console.log(value))
}

const getCars =()=>{
    return fetch('http://195.72.146.25/api/v1/cars')
        .then(response=>response.json())
}

export {saveCar,getCars}
