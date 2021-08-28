import {useEffect, useState} from "react";
import {editCars, getCars} from "../../services/car.service";
import CarsSelectOption from "../selectedcar/CarsSelectOption";

export default function UpdateCar() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])
    const getSelectedCar = (e) => {
        const carId = e.target.value;
        const filteredCar = (cars.filter(item => (item.id == carId)))
        const car = filteredCar[0];
        formFill(car);
    }
    const formFill = (car) => {
        setFormState({...formState, ...car})
    }
    const onFormInputChange=(e)=>{
        setFormState({...formState,[e.target.name]:e.target.value})
    }
    const onFormSubmit =(e)=>{
        e.preventDefault();
        editCars({...formState});
    }
    return (
        <div>
            <form onChange={getSelectedCar}>
                <select>
                    {
                        cars.map(value => <CarsSelectOption
                            key={value.id}
                            item={value}
                        />)
                    }
                </select>
            </form>
            <form onSubmit={onFormSubmit}>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                <input type="number" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                <input type="number" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <input type="submit"/>
            </form>

        </div>
    );
}