const url = 'http://91.201.233.14/api/v1/cars';
const getCars = () => {
    return fetch(url)
        .then(value => value.json())
}
const createCars = (item) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({...item}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
}
const editCars = (item) => {
    return fetch(url + '/' + item.id, {
        method: 'PATCH',
        body: JSON.stringify({...item}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}

export {getCars, createCars, editCars}