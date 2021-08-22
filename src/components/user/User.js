export default function User({item}) {
    return (<option key={item.id} value={item.name}>{item.name} </option>);
}