export default function CarsSelectOption({item}) {

    return (
        <option
                value={item.id}>{item.model}
        </option>

    );
}