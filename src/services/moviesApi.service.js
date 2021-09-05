const apiKey = '?api_key=8112822a05344cdbb0000f5a0418ca34';
const genresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
const moviesUrl = 'https://api.themoviedb.org/3/discover/movie';
const url = 'https://api.themoviedb.org/3';
const exportApiMoviesUrl = 'http://files.tmdb.org/p/exports/movie_ids_09_04_2021.json.gz';

const getApiGenres = async () => {
    return await fetch(genresUrl + apiKey, {
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTEyODIyYTA1MzQ0Y2RiYjAwMDBmNWEwNDE4Y2EzNCIsInN1YiI6IjYxMzBlZTc2NmEzNDQ4MDAyYzE5MTA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y6R_aO0vPV_9VfwVPzdYniUJz_3IJMpivfD54WmhSM',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(value => value.json());
}

const getApiMovies = async () => {
    return await fetch(moviesUrl + apiKey, {
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTEyODIyYTA1MzQ0Y2RiYjAwMDBmNWEwNDE4Y2EzNCIsInN1YiI6IjYxMzBlZTc2NmEzNDQ4MDAyYzE5MTA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y6R_aO0vPV_9VfwVPzdYniUJz_3IJMpivfD54WmhSM',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(value => value.json());
}

const getMoviesList = async (id) => {
    const response = await fetch(url + `/list/${id}` + apiKey, {
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTEyODIyYTA1MzQ0Y2RiYjAwMDBmNWEwNDE4Y2EzNCIsInN1YiI6IjYxMzBlZTc2NmEzNDQ4MDAyYzE5MTA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y6R_aO0vPV_9VfwVPzdYniUJz_3IJMpivfD54WmhSM',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(value => value.json());
    return response;
}

const getApiMovie = async (id) => {
    return await fetch(url + '/movie/' + id + apiKey, {
        headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTEyODIyYTA1MzQ0Y2RiYjAwMDBmNWEwNDE4Y2EzNCIsInN1YiI6IjYxMzBlZTc2NmEzNDQ4MDAyYzE5MTA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y6R_aO0vPV_9VfwVPzdYniUJz_3IJMpivfD54WmhSM',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then(value => value.json());
};
const getApiPage = async (number) => {
    return await fetch(moviesUrl + `?page=${number}`, {
            headers: {
                Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTEyODIyYTA1MzQ0Y2RiYjAwMDBmNWEwNDE4Y2EzNCIsInN1YiI6IjYxMzBlZTc2NmEzNDQ4MDAyYzE5MTA3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2y6R_aO0vPV_9VfwVPzdYniUJz_3IJMpivfD54WmhSM',
                'Content-Type': 'application/json;charset=utf-8'
            }
        }
    )
        .then(value => value.json())
}
export {getApiGenres, getApiMovies, getMoviesList, getApiMovie,getApiPage};

