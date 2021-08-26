import './App.css';
import UserSelectComponent from "./components/form/UserSelectComponent";
import Posts from "./components/posts/Posts";
import {useState} from "react";
import {getPostsOfUser} from "./services/post.service";


export default function AppDiv() {
    const [userPosts, setUserPosts] = useState([]);
    const getUserId =  (id) => {
         getPostsOfUser( id).then(value => setUserPosts([...value]))
    }
    return (
        <div className={'appDiv'}>
            <UserSelectComponent getUserId={getUserId}/>
            {
                userPosts.map(value => <Posts
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}
