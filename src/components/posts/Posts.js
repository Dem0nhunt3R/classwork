import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";
import "./Posts.css"
import PostDetails from "../post-details/PostDetails";
import {Route} from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);
    return (
            <div>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                    />)
                }
            </div>
    );
}