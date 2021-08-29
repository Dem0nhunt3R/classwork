import {useState} from "react";
import {createCars} from "../../services/car.service";

export default function CreateCar() {
    const [formState, setFormState] = useState({model: '', price: '', year: ''});

    const onFormInputChange=(e)=>{
        setFormState({...formState,[e.target.name]:e.target.value})
    }

    const createCarOnSubmit = async (e) => {
        e.preventDefault();
        await createCars({...formState})
        setFormState({model: '', price: '', year: ''})
    }

    return (
        <div>
            <form className={'createCarForm'} onSubmit={createCarOnSubmit}>
                <input type={'text'} name={'model'} value={formState.model} placeholder={'model'}
                onChange={onFormInputChange}/>
                <input type={'number'} name={'price'} value={formState.price} placeholder={'price'}
                onChange={onFormInputChange}/>
                <input type={'number'} name={'year'} value={formState.year} placeholder={'year'}
                onChange={onFormInputChange}/>
                <input type={'submit'}/>
            </form>
        </div>
    );
}