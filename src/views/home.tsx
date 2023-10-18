import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import moviesController from "@/controllers/movies-controller";
import {Movie} from "@/types/movies/types";

export function Home() {
    const [movies, setMovies] = useState<Movie[] | undefined>(undefined);
    const kevin = async () => {
        const res = await moviesController.getMovies();

        if (res.ok) {
            setMovies(res.data.results);
        }
    };

    useEffect(() => {
        kevin();
    }, []);

    return (
        <div className="">
            <h2 className="Movies">Hola</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 p-2">
                {movies?.map((movie) => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <Link to={`/detail/${movie.id}`}>
                            <img alt="" src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
