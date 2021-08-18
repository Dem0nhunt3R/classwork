import {useState, useEffect} from "react";
import {getCars, saveCar} from "../services/api.service/api.service";
import Car from "./Car";

export default function Form() {
    const [model, setModel] = useState('model');
    const [price, setPrice] = useState('price');
    const [year, setYear] = useState('year');
    const [car, setCar] = useState(null);
    const [cars, setCars] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        let tempCar = {model, price, year};
        setCar({...tempCar});
        saveCar(tempCar);
    }
    const onInputChangeModel = (e) => {
        let tempModel = e.target.value
        setModel(tempModel);
    }
    const onInputChangePrice = (e) => {
        let tempPrice = e.target.value;
        setPrice(tempPrice);
    }
    const onInputChangeYear = (e) => {
        let tempYear = e.target.value;
        setYear(tempYear);
    }
    useEffect(() => {
        getCars().then(value => setCars([...value]));
    }, [cars])

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} placeholder='model' onInput={onInputChangeModel}/>
                <input type="number" name={'price'} placeholder='price' onInput={onInputChangePrice}/>
                <input type="number" name={'year'} placeholder='year' onInput={onInputChangeYear}/>
                <input type="submit" value={'save'}/>
                {car && <div>
                    {
                        cars.map(value => <Car
                            item={value}
                            key={value.id}
                        />)
                    }
                </div>}
            </form>

        </div>
    );
}