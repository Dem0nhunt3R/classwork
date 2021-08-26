import {createRef, useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";

export default function UserSelectComponent({getUserId}) {
    const formRef = createRef();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers()
            .then(value => setUsers(value))
    }, [])

    let tempId;
    const selectedUser = () => {
        getUsers().then(value => {
            for (const userName of value) {
                if (userName.name === formRef.current.selected.value)
                    tempId = userName.id;
            }
            getUserId(tempId);
        })
    };

    return (
        <div>
            <form ref={formRef}>
                <select name={'selected'} onChange={selectedUser}>
                    {
                        users.map(value => <User
                            key={value.id}
                            item={value}/>)
                    }
                </select>
            </form>
        </div>
    );
}
