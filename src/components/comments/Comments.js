import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../services/comment.service";
import Comment from "./Comment";

export default function Comments({commentId}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getCommentsOfPost(commentId).then(value => setComments([...value]));
    }, [commentId]);
    return (
        <div>
            {
                comments.map(value => <Comment item={value} key={value.id}/>)
            }
        </div>
    );
}