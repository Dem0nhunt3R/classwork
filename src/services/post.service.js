function getPostsOfUser(id){
    return fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
        .then(value => value.json())
}
export {getPostsOfUser}