import "./Car.css"
const Car=({item, deleteCar,formFill,formFilled})=>{
    const onClickCarDelete = () => {
        deleteCar(item.id)
    }
    const onClickCarEdit = () => {
        formFill(item);
    }

    return (
        <div>
            #{item.id}model:{item.model},price: {item.price}$, year: {item.year}
            <div>
                <button className={'deleteBtn'} onClick={onClickCarDelete}>delete</button>
                <button className={'editBtn'} onClick={onClickCarEdit}>edit</button>
            </div>
        </div>
    );
}
export {Car};