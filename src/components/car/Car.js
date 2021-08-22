import "./Car.css"

export default function Car({item, deleteCar,formFill,editCar}) {
    const onClickCarDelete = () => {
        deleteCar(item.id)
    }
    const onClickCarEdit = () => {
        console.log(item)
        formFill(item)
    }
    // const onClickSaveEdit=()=>{
    //     console.log('edited')
    //     editCar();
    // }
    return (
        <div>
            #{item.id}model:{item.model},price: {item.price}$, year: {item.year}
            <div>
                <button className={'deleteBtn'} onClick={onClickCarDelete}>delete</button>
                <button className={'editBtn'} onClick={onClickCarEdit}>edit</button>
                {/*<input type="submit" onClick={onClickSaveEdit}/>*/}
            </div>
        </div>
    );
}
