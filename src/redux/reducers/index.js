import {moviesReducer} from "./moviesReducer";
import {genresReducer} from "./genresReducer";
import {combineReducers} from 'redux'

export const reducer = combineReducers({moviesReducer,genresReducer})