export default function User({item, choseUser}) {
    const onClickChoseUser = () => {
        choseUser(item);
    }
    return (
        <div>
            {item.id} - {item.name}
            <button onClick={onClickChoseUser}>details
            </button>
        </div>
    );
}