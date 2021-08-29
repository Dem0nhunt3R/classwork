import {getPostDetails} from "../../services/api.service";
import {useEffect, useState} from "react";

export default function PostDetails(props) {
    const {match: {params: {id}}} = props;
    const [post,setPost] = useState({});

    useEffect(()=>{
        getPostDetails(id).then(value => setPost({...value}))
    },[id])

    return (
        <div>
            {JSON.stringify(post.body)}
        </div>
    );
}