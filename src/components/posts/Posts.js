import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPostsOfUsers} from "../../services/post.service";

export default function Posts({userId},) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsOfUsers(userId).then(value =>
            setPosts([...value]));
    }, [userId]);
    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id}/>)

            }
        </div>
    );
}
