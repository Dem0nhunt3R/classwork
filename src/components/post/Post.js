export default function Post({item, chosePost}) {
    const onClickPostChose = () => {
        chosePost(item);
    }
    return (
        <div>
            -{item.title}
            <button onClick={onClickPostChose}>post details</button>
        </div>
    );
}