const saveCars = ({model, price, year}) => {
    return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        },
    })
        .then(response => response.json())
}
const getCars = () => {
    return fetch('http://195.72.146.25/api/v1/cars')
        .then(response => response.json())
}

const deleteCarAPI = (id) => {
    return fetch(`http://195.72.146.25/api/v1/cars/${id}`,
        {
            method: 'DELETE',
        })
};

const editCarApi = (id) => {
    console.log(id)
    return fetch(`http://195.72.146.25/api/v1/cars/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify({

            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
}
export {getCars, saveCars, deleteCarAPI,editCarApi}