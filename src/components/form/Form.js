import Car from "../car/Car";
import {deleteCarAPI, editCarApi, getCars, saveCars} from "../../services/car.service";
import {useEffect, useState} from "react";

export default function Form() {
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
    const formFill = (item) => {
        setFormState({...formState, ...item})
    }
    const editCar =  () => {
         editCarApi({...formState}).then(value =>
            {
                getCars().then(value1=>setCars(value1))
            })
    }

    return (

        <div>
            <form onSubmit={saveCar}>
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
                        formFill={formFill}
                        editCar={editCar}
                    />)
                }
            </div>
            }
        </div>
    );
}