import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div>
            {item.title}---
            <Link to={{pathname:`/posts/${item.id}`, state: item}}>postDetails</Link>
        </div>
    );
}
