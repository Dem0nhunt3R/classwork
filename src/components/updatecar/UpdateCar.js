import {useEffect, useState} from "react";
import {editCars, getCars} from "../../services/car.service";
import CarsSelectOption from "../selectedcar/CarsSelectOption";

export default function UpdateCar() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])                                                    // TODO розділяй функції ентерами

    const getSelectedCar = ({target: {value}}) => {
        const car = cars.find(item => item.id === +value)          // TODO не доречно використовувати фільтр якщо шукаєш перше входження
        setFormState(car)
    }

    const onFormInputChange=(e)=>{
        setFormState({...formState,[e.target.name]:e.target.value})
    }

    const onFormSubmit = async (e)=>{
        e.preventDefault();
        await editCars({...formState})
        setFormState({model: '', price: '', year: ''})       // TODO скидаю інпути післязапиту
    }

    return (
        <div>
            <form onChange={getSelectedCar}>
                <select>
                    <option></option>
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
