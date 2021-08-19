import {useState, useEffect} from "react";
import {getCars, saveCar} from "../services/api.service/api.service";
import Car from "./Car";

export default function Form() {
    const [model, setModel] = useState('model');
    const [price, setPrice] = useState('price');
    const [year, setYear] = useState('year');
    const [cars, setCars] = useState(null);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        let tempCar = {model, price, year};
        const createdCar = await saveCar(tempCar);
        setCars([...cars,createdCar]);
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
    }, [])

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} placeholder='model' onInput={onInputChangeModel}/>
                <input type="number" name={'price'} placeholder='price' onInput={onInputChangePrice}/>
                <input type="number" name={'year'} placeholder='year' onInput={onInputChangeYear}/>
                <input type="submit" value={'save'}/>
            </form>
            {cars && <div>
                {
                    cars.map(value => <Car
                        item={value}
                        key={value.id}
                    />)
                }
            </div>}

        </div>
    );
}