import styles from "@/components/goHome.module.css";
export default function GoHome(props)
{
    return (
        <div className = {styles.home}>
            <button onClick = {props.home} className = {styles.button}>Go Home</button>
        </div>
    )
}