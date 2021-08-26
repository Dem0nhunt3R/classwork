import "./Car.css"
export let formFilled;
export default function Car({item, deleteCar,formFill}) {
    const onClickCarDelete = () => {
        deleteCar(item.id)
    }
    const onClickCarEdit = () => {
        console.log(item);
        formFilled=formFill(item);
        console.log(formFilled);
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
