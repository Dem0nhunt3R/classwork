import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/post.service";
import "./Posts.css"

export default function Posts() {
    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    useEffect(() => {
        getPostsOfUser().then(value => setPosts([...value]));
    }, [])
    const chosePost = (p) => {
        setPost({...p});
    }
    return (
        <div className={'posts-div'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post
                        item={value}
                        key={value.id}
                        chosePost={chosePost}
                    />)
                }
            </div>
            {
                post && <div className={'chosenPost'}>
                    {post.body}
                </div>
            }

        </div>
    );
}