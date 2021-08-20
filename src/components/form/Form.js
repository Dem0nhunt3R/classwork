import Car from "../car/Car";
import {deleteCarAPI, editCarApi, getCars, saveCars} from "../../services/car.service";
import {createRef, useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

export default function Form() {
    let refObject = createRef();
    let [formState, setFormState] = useState({model: '', price: '', year: ''});
    let [cars, setCars] = useState([]);

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const saveCar = async (e) => {
        e.preventDefault();
        const tempCar = {...(formState)};
        const createdCar = await saveCars(tempCar);
        setCars([...cars, createdCar]);
    }

    useEffect(() => {
        getCars().then(value => setCars(value))
    }, [])
    const deleteCar = (id) => {
        deleteCarAPI(id).then(value => console.log(value));
        let filterCarsArray = cars.filter(value => (value.id !== id));
        setCars([...filterCarsArray]);
    };
    const editCar=(id)=> {
        console.log({...formState})
        // editCarApi(id).then(value => console.log(value))
        editCarApi(id).then(value => console.log(value))
    }
        return (

        <div>
            <form onSubmit={saveCar} ref={refObject}>
                <input type="text" name={'model'} value={formState.model} placeholder={'model'}
                       onChange={onFormInputChange}/>
                <input type="number" name={'price'} value={formState.price} placeholder={'price'}
                       onChange={onFormInputChange}/>
                <input type="number" name={'year'} value={formState.year} placeholder={'year'}
                       onChange={onFormInputChange}/>
                <input type="submit"/>
            </form>
            {cars && <div>
                {
                    cars.map(value => <Car
                        item={value}
                        key={value.id}
                        deleteCar={deleteCar}
                        editCar={editCar}
                    />)

                }
            </div>
            }
        </div>
    );
}