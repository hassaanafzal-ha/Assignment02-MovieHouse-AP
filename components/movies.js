import styles from "@/components/movies.module.css";
import { useState } from "react";
import Link from "next/link";

export default function MoviesDisplay(props) {
    const [genreFilter, setGenreFilter] = useState("");

    const uniqueGenres = [...new Set(props.details.map(movie => movie.genreId))];

    const filteredMovies = genreFilter ? props.details.filter(movie => movie.genreId === genreFilter) : props.details;

    return (
        <div className={styles.display}>
            <h2>Movies</h2>

            <div style={{ marginBottom: "20px" }}>
                <label htmlFor="genre">Filter by Genre ID: </label>
                <select id="genre" value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
                    <option value="">All</option>
                    {uniqueGenres.map((genreId) => (
                        <option key={genreId} value={genreId}>{genreId}</option>
                    ))}
                </select>
            </div>

            <div>
                {filteredMovies.map((val) => (
                    <div className={styles.movies} key={val.id}>
                        <div>Id: {val.id}</div>
                        <div>
                            Title:{" "}
                            <Link href={`/movies/${val.id}`} style={{ color: "yellow" }}>
                                {val.title}
                            </Link>
                        </div>
                        <div>Director Id: {val.directorId}</div>
                        <div>Description: {val.description}</div>
                        <div>Release Year: {val.releaseYear}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
