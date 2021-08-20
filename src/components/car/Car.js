import "./Car.css"

export default function Car({item, deleteCar, editCar}) {

    const onClickCarDelete = () => {
        deleteCar(item.id)
    }
    const onClickCarEdit = () => {
        editCar(item.id,item)
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