import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";
import Post from "../post/Post";

export default function Posts({userId}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsOfUser(userId).then(value => setPosts([...value]));
    }, [userId]);
    return (
        <div>
            {posts.map(value => <Post item={value}
                                      key={value.id}
            />)}
        </div>

    );
}