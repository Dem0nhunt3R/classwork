import {Link, Route} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";

export default function Post({item}) {
    return (
        <div>
            {item.title}---
            <Link to={'/posts/postDetails'}>postDetails</Link>
                <Route path={'/posts/postDetails'} component={PostDetails}/>
        </div>
    );
}