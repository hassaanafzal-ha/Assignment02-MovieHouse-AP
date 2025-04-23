import styles from "@/components/movies.module.css";
export default function MoviesDisplay(props)
{
    return (<div className = {styles.display}>
        Movies 
        <div>
            {props.details.map((val)=>
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
    </div>)
}