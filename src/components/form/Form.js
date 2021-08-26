import {deleteCarAPI, editCarApi, getCars, saveCars} from "../../services/car.service";
import {useEffect, useState} from "react";
import {Car} from "../car/Car";

export default function Form() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars(value))
    }, [])

    const onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    const saveCar = async (e) => {
        e.preventDefault();
        const carData = {...(formState)};

        if (formState.id) {
            editCar();
            console.log('edited')
        } else {
            let tempCar = await saveCars(carData);
            setCars([...cars, tempCar]);
            console.log('created');
        }
    }

    const deleteCar = (id) => {
        deleteCarAPI(id).then(value => console.log(value));
        const filterCarsArray = cars.filter(value => (value.id !== id));
        setCars([...filterCarsArray]);
    };
    const formFill = (item) => {
        setFormState({...formState, ...item})
        return true;
    }
    const editCar = () => {
        editCarApi({...formState}).then(() => {
            getCars().then(value1 => setCars(value1))
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
                    />)
                }
            </div>
            }
        </div>
    );
}