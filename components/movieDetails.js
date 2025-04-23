import styles from "@/components/movieDetails.module.css";
export default function MovieDetails(props)
{
    if (!props.details || props.details.length === 0) {
        return;
    }
    return (<div className = {styles.display}>
        Movies 
        <div>
            <div className = {styles.movieDetails} key = {props.details.id}>
                <div>
                Id: {props.details.id}
                </div>
                <div>
                Title: {props.details.title}
                </div>
                <div>
                Director Id: {props.details.directorId}
                </div>
                <div>
                Description : {props.details.description}
                </div>
                <div>
                Release Year: {props.details.releaseYear}
                </div>
                </div>
        </div>
    </div>)
}