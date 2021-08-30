import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service";
import Post from "../post/Post";
import "./Posts.css"
import PostDetails from "../post-details/PostDetails";
import {Route} from "react-router-dom";

export default function Posts(props) {
    const {match: {url}} = props;
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
                <Route path={`${url}/:id`} render={(props) => {
                    return <PostDetails {...props}/>
                }}/>
        </div>
    );
}
