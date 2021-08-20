import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";
import User from "../user/User";

export default function UserSelectComponent() {
    let [users,setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers(...value))
    })
   const selectUser=()=>{
        users.map(value => <User item={value.name}/>)
   }

  return (
    <div>
        <select value={selectUser}>name</select>
    </div>
  );
}