import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getApiMovie} from "../../services/moviesApi.service";
import './MoviesListCard.css'
import PosterPreview from "../posterPreview/PosterPreview";
import StarsRating from "../starsRating/StarsRating";
import GenreBadge from "../genreBadge/GenreBadge";

export default function MoviesListCard() {
    const {id: movieId} = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const [prodCompanies, setProdCompanies] = useState([]);
    const [prodCountries, setProdCountries] = useState([]);


    useEffect(() => {
        async function fetchData() {
            return await getApiMovie(movieId).then(value => {
                setMovie({...value});
                setGenres([...value.genres]);
                setProdCompanies([...value.production_companies]);
                setProdCountries([...value.production_countries])
            });
        };
        fetchData();
    }, [movieId]);

    console.log(movie);

    return (
        <div className={'receivedMovie'}>
            <div className={'posterAndRating'}>
                <PosterPreview posterPath={movie.poster_path}/>
                <StarsRating rating={movie.vote_average}/>
                <p>Raiting: {movie.vote_average}</p>
            </div>
            <div className={'movieInfo'}>
                <h2>{movie.original_title}</h2>
                <h4>{movie.tagline}</h4>
                <hr/>
                <GenreBadge genres={genres}/>
                <p>Production companies:
                    {prodCompanies.map(function (value, index) {
                        if (index === prodCompanies.length - 1) {
                            return ` ${value.name}.`
                        }
                        return ` ${value.name}, `
                    })}
                </p>
                <p>Production counties:
                    {prodCountries.map(function (value, index) {
                        if (index === prodCountries.length - 1) {
                            return ` ${value.name}.`
                        }
                        return ` ${value.name}, `
                    })}
                </p>
                <h4 className={'xxx'}>Overview:</h4>
                <p className={'overviewP'}>{movie.overview}</p>
                <p>Release date: {movie.release_date}.</p>
                <p>Runtime:{movie.runtime}min.</p>
                <hr/>
            </div>
        </div>
    );
}