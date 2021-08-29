import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div>
            {item.title}---
            <Link to={`/posts/${item.id}`}>postDetails</Link>
        </div>
    );
}