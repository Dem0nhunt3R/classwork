import "./MoviesList.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getApiMovies} from "../../services/moviesApi.service";
import {getMovies} from "../../redux/actions/actionsCreator";
import {Link} from "react-router-dom"

const backdropUrl = 'https://image.tmdb.org/t/p/w400';

export default function MoviesList() {
    const moviesState = useSelector(state => {
        const {moviesReducer} = state;
        return moviesReducer;
    });

    const {movies} = moviesState;
    const dispatch = useDispatch();

    useEffect(() => {
        getApiMovies().then(value => {
            dispatch(getMovies([...value.results]));
        })
    }, []);

    return (
        <div>
            <div className={'moviesDiv'}>
                {
                    movies.map(value =>
                        <Link to={`/movies/${value.id}`} key={value.id}>
                            <div className={'movieDiv'}>
                                <img src={backdropUrl + value.backdrop_path} alt=""/>
                                <p>{value.original_title}</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
}