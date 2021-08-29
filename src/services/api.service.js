function getUsers(){
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const postUrl='https://jsonplaceholder.typicode.com/posts';

function getPosts(){
    return fetch(postUrl)
        .then(value => value.json())
}

function getPostDetails(id){
    return fetch(postUrl+'/'+id)
        .then(value => value.json())
}

export {getPosts,getUsers,getPostDetails}


