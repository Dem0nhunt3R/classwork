function getPostsOfUser(postId){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(value => value.json())
}
export {getPostsOfUser}