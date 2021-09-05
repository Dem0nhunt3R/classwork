import {GET_GENRES} from "../actions/actionTypes";

export const genresReducer =(state= {genres: []},action)=>{
    switch (action.type){
        case GET_GENRES:
            return {...state,genres:[...action.payload]}
        default:
            return state;
    }
}