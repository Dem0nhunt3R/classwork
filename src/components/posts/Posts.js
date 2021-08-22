import Post from "../post/Post";
import {postsArr} from "../form/UserSelectComponent";
let tempArr=[];
const UserPosts=async (item)=> {
    console.log(item);
    await tempArr.push({...item});
    console.log(tempArr);
}
const Posts=() =>{
    return (
        <div>
            {
                tempArr.map(value => <Post posts={value} key={value.id}
                />)
            }
        </div>
    );
}
export {UserPosts, Posts}