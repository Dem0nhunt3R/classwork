const url = 'http://91.201.233.14/api/v1/cars'
const saveCars = ({model, price, year}) => {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify({model, price, year}),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        },
    })
        .then(response => response.json())
}
const getCars = () => {
    return fetch(url)
        .then(response => response.json())
}

const deleteCarAPI = (id) => {
    return fetch(url + '/' + id,
        {
            method: 'DELETE',
        })
};

const editCarApi = (item) => {
    return fetch(url + '/' + item.id,
        {
            method: 'PUT',
            body: JSON.stringify({
                model: item.model,
                price: item.price,
                year: item.year
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
}

export {getCars, saveCars, deleteCarAPI,editCarApi}