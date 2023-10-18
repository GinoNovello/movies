import {getService} from "@/services/http-client";
import {MovieDetail, MovieResponse} from "@/types/movies/types";

const API_URL = "https://api.themoviedb.org/3";
const auth = () => {
    const url = `${API_URL}/authentication`;

    const dataService = {
        url: url,
    };

    return getService(dataService);
};
const getMovies = () => {
    const url = `${API_URL}/discover/movie`;
    const dataService = {
        url: url,
    };

    return getService<MovieResponse>(dataService);
};

const getMovie = ({movieId = ""}: {movieId?: string}) => {
    const url = `${API_URL}/movie/${movieId}`;
    const dataService = {
        url: url,
    };

    return getService<MovieDetail>(dataService);
};

export default {auth, getMovie, getMovies};
