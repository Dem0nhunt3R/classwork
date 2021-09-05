import {useEffect} from "react";
import {getApiGenres} from "../services/moviesApi.service";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../redux/actions/actionsCreator";
import './MoviesPage.css'
import MoviesList from "../components/moviesList/MoviesList";
import{
    Route,
    Link,
} from "react-router-dom"
import MoviesListCard from "../components/moviesListCard/MoviesListCard";
import UserInfo from "../components/userInfo/UserInfo";

export default function MoviesPage() {

    const genresState = useSelector(state => {
        const {genresReducer} = state;
        return genresReducer;
    });
    const dispatch = useDispatch();
    const {genres} = genresState;

    useEffect(() => {
        getApiGenres().then(value => {
            dispatch(getGenres([...value.genres]))
        })
    }, []);

    return (
        <div className={'moviesPageDiv'}>
            <div className={'header'}>
                <select className={'select'}>
                    <option value="">select genre</option>
                    {genres.map(value => <option key={value.id}>{value.name}</option>)}
                </select>
                <form className={'searchForm'}>
                    <input type="text" placeholder={'search the movie'}/>
                </form>
            </div>
            <hr/>

            <div className={'centerDiv'}>
                <div className={'leftListDiv'}>
                    <div className={'userPhotoDiv'}></div>
                    <UserInfo/>
                    <hr/>
                    <p>Media</p>
                    <div className={'mediaDiv'}>
                        <p><Link to={'/movies'}>Movies</Link></p>
                        <p><Link to={'/tvShows'}>TV shows</Link></p>
                        <p><Link to={'/music'}>Music</Link></p>
                        <p><Link to={'/audioBooks'}>Audiobooks</Link></p>
                        <p><Link to={'/games'}>Games</Link></p>
                        <p><Link to={'/apps'}>Apps</Link></p>
                        <p><Link to={'/updates'}>Updates</Link></p>
                    </div>
                    <p>Account</p>
                    <p><Link to={'/library'}>Library</Link></p>
                    <p><Link to={'wishlist'}>Wishlist</Link></p>
                    <p><Link to={'settings'}>Settings</Link></p>
                    <hr/>
                    <p className={'SignP'}>
                        <Link to={'signOut'}>Sign out</Link>
                    </p>
                </div>
                <Route exact path={'/movies'} component={MoviesList}/>
                <Route path={'/movies/:id'} render={(props)=>{
                    return <MoviesListCard {...props}/>
                }}/>

            </div>

        </div>
    );
}