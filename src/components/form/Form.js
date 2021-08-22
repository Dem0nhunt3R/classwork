import Car from "../car/Car";
import {deleteCarAPI, editCarApi, getCars, saveCars} from "../../services/car.service";
import {useEffect, useState} from "react";

export default function Form() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const [cars, setCars] = useState([]);

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const saveCar = async (e) => {
        e.preventDefault();
        let newArrCars;
        formState.id
            ? newArrCars = await editCarApi(formState)
            : newArrCars = await saveCars(formState);
        setCars(newArrCars);
        setFormState({model: '', price: '', year: ''});
    }

    useEffect(() => {
        getCars().then(value => setCars(value))
    }, [])

    const deleteCar = async (id) => {
        await deleteCarAPI(id);
        const filterCarsArray = cars.filter(value => (value.id !== id));
        setCars([...filterCarsArray]);
    };

    const formFill = (item) => {
        setFormState({...formState, ...item})
    }

    const editCar = async () => {
        await editCarApi({...formState});
        const newArrCars = await getCars();
        setCars(newArrCars);
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
