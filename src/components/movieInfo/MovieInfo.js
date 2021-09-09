import {useParams} from "react-router";
import PosterPreview from "../posterPreview/PosterPreview";
import StarsRating from "../starsRating/StarsRating";
import {useEffect, useState} from "react";
import {getApiMovie} from "../../services/moviesApi.service";

export default function MovieInfo() {
    const {id: movieId} = useParams();
    const [movie, setMovie] = useState({});
    const [movieGenres, setMovieGenres] = useState([]);
    const [prodCompanies, setProdCompanies] = useState([]);
    const [prodCountries, setProdCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await getApiMovie(movieId).then(value => {
                setMovie({...value});
                setMovieGenres([...value.genres]);
                setProdCompanies([...value.production_companies]);
                setProdCountries([...value.production_countries])
            });
        }

        fetchData();
    }, [movieId]);

    return (
        <div className={'receivedMovie'}>
            <div className={'posterAndRating'}>
                <PosterPreview posterPath={movie.poster_path}/>
                <StarsRating rating={movie.vote_average}/>
                <p>Rating: {movie.vote_average}</p>
            </div>
            <div className={'movieInfo'}>
                <h2>{movie.original_title}</h2>
                <h4>{movie.tagline}</h4>
                <hr/>
                <div>
                    Genres: {
                    movieGenres.map(function (value, index) {
                        if (index === movieGenres.length - 1) {
                            return `${value.name}.`;
                        }
                        return ` ${value.name}, `;
                    })
                }
                </div>
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
                <hr/>
                <h4 className={'xxx'}>Overview:</h4>
                <p className={'overviewP'}>{movie.overview}</p>
                <hr/>
                <p>Release date: {movie.release_date}.</p>
                <p>Runtime:{movie.runtime}min.</p>
                <hr/>
            </div>
        </div>
    );
}