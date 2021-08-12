
import Post from "../post/Post";

export default function Posts({posts}) {

    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)
            }
        </div>
    );
}
