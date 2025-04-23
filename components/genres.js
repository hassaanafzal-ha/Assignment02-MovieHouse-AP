import styles from "@/components/genres.module.css";
export default function GenreDetails(props)
{
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