import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";
import "./Users.css"
import Posts from "../posts/Posts";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, [])
    const choseUser = (userInfo) => {
        setUser({...userInfo})
    }
    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map(value =>
                        <User item={value}
                              key={value.id}
                              choseUser={choseUser}
                        />)
                }
            </div>

            {
                user && <div className={'chosen-one'}>
                    {<Posts userId={user.id}/>}
            </div>
            }
        </div>
    );
}

