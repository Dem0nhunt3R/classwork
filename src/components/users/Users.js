import {getUsers} from "../../services/api.service";
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);
    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}