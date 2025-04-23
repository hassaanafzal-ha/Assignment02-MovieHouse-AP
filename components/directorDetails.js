import styles from "@/components/directorDetails.module.css";
export default function DirectorDetails(props)
{
    if (!props.details || props.details.length === 0) {
        return;
    }
    return (<div className = {styles.display}>
        Directors Details 
        <div>
            {
            <div className = {styles.directors} >
                <div>
                Id: {props.details.id}
                </div>
                <div>
                Name: {props.details.name}
                </div>
                <div>
                Biography: {props.details.biography}
                </div>
                </div>
            }
        </div>
    </div>)
}