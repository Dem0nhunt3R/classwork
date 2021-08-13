import Comments from "../comments/Comments";
import './Post.css'

export default function Post({item, postId = item.id}) {
    return (
        <div className={'post-box'}>
            Post #{item.id}: {item.title}

            <div>
                Comments of post #{item.id}:
                <Comments commentId={postId}/>
            </div>
        </div>
    );
}