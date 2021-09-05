import {GET_GENRES, GET_MOVIES} from "./actionTypes";

const getMovies=(payload)=>{
    return{type:GET_MOVIES,payload};
}

const getGenres=(payload)=>{
    return{type:GET_GENRES,payload};
}

export {getMovies,getGenres}