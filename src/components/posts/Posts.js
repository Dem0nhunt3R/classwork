import Post from "../post/Post";

export default function Posts({item}) {
    return (
        <div className={'posts-box'}>
            <Post posts={item}/>
        </div>
    );
}
