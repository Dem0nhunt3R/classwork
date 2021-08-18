import {useState} from "react";
import {carsArray, getCars, saveCar} from "../services/api.service/api.service";

export default function Form() {
    let [model, setModel] = useState('model');
    let [price, setPrice] = useState('price');
    let [year, setYear] = useState('year');
    let [car, setCar] = useState({model: '', price: '', year: ''});

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
        let tempPrice=e.target.value;
        setPrice(tempPrice);
    }
    const onInputChangeYear = (e) => {
        let tempYear = e.target.value;
        setYear(tempYear);
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input type="text" name={'model'} placeholder='model' onInput={onInputChangeModel}/>
                <input type="number" name={'price'} placeholder='price' onInput={onInputChangePrice}/>
                <input type="number" name={'year'} placeholder='year' onInput={onInputChangeYear}/>
                <input type="submit" value={'save'}/>
            </form>

        </div>
    );
}