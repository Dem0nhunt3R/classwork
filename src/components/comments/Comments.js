import "./Comments.css"
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState(null);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    }, []);

    const choseComment = (c) => {
        setComment({...c})
    }
    return (
        <div className={'wrap'}>
            <div className="comments-box">
                {
                    comments.map(value =>
                        <Comment
                            key={value.id}
                            item={value}
                            choseComment={choseComment}
                        />
                    )
                }
            </div>
            {
               comment && <div className="comment-box">
                   {comment.body}
                </div>
            }
        </div>
    );
}