export default function Post({item, chosePost}) {
    const onClickPostChose = () => {
        chosePost(item);
    }
    return (
        <div>
            Post #{item.id}  -{item.title}
            <button onClick={onClickPostChose}>post details</button>
        </div>
    );
}