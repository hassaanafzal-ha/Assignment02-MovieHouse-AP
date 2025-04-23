import styles from "@/components/genres.module.css";
export default function GenreDetails(props)
{
    if (!props.details || props.details.length === 0 ) {
        return;
    }
     return (<div className = {styles.display}>
        Genres 
        <div>
            {props.details.map((val)=>
            <div className = {styles.genres} key = {val.id}>
                <div>
                Id: {val.id}
                </div>
                <div>
                Name: {val.name}
                </div>
                </div>
            )}
        </div>
    </div>)
}
