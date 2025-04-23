import styles from "@/components/trendingMovies.module.css";
export default function TrendingMovies(props)
{

    return (<div className = {styles.display}>
        Trending Movies 
        <div>
            {props.movies.map((val)=>
            <div className = {styles.movies} key = {val.id}>
                <div>
                Id: {val.id}
                </div>
                <div>
                Title: {val.title}
                </div>
                <div>
                Director Id: {val.directorId}
                </div>
                <div>
                Description : {val.description}
                </div>
                <div>
                Release Year: {val.releaseYear}
                </div>
                </div>
            )}
        </div>
        <button onClick = {props.click} className = {styles.Button}>Browse Genres</button>
    </div>)
}