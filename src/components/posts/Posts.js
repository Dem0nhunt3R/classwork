import Post from "../post/Post";
import {useEffect} from "react";

export default function Posts() {
    return (
        <div>
            <div className={'posts-box'}>

                {
                    posts.map(value => <Post
                        item={value}
                        key={value.id}
                        postId={value.id}
                    />)
                }
            </div>

        </div>
    );
}