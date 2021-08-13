function getPostsOfUsers(userId){
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(value => value.json())
}

export {getPostsOfUsers};