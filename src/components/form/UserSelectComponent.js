import {createRef, useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";
import {getPostsOfUser} from "../../services/post.service";
import {UserPosts} from "../posts/Posts";

export let postsArr = [];

export default function UserSelectComponent() {
    const formRef = createRef();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(value => setUsers(value))
    }, [])

    const selectedUser = () => {
        let tempUserId = 0;
        getUsers().then(value => {
            for (const userName of value) {
                if (userName.name === formRef.current.selected.value)
                    tempUserId = userName.id
            }
            getPostsOfUser(tempUserId).then(value => postsArr.push(...value))
        })
        UserPosts(postsArr);
    };

    return (
        <div>
            <form ref={formRef}>
                <select name={'selected'} onChange={selectedUser}>
                    {
                        users.map(value => <User user={value.id} item={value}/>)
                    }
                </select>
            </form>
        </div>
    );
}
