import styles from "@/components/directors.module.css";
export default function Directors(props)
{
    const directedMovies = [];
    for(let i in props.moviesDirected)
    {
        directedMovies.push(props.moviesDirected[i]);
    }
    const directors = [];
    for(let i in props.details)
    {
        directors.push(props.details[i]);
    }
    return (<div className = {styles.display}>
        Directors 
        <div>
            {directors.map((val)=>
            <div className = {styles.directors} >
                <div>
                Id: {val.id}
                </div>
                <div>
                Name: {val.name}
                </div>
                <div>
                Biography: {val.biography}
                </div>
                
                <div>
                Movies Directed: {directedMovies.filter((movie)=>movie.directorId === val.id).map((val)=>{return <div>{val.title}</div>})}
                </div>
                </div>
            )}

        </div>
    </div>)
}