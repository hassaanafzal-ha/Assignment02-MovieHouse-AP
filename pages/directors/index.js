import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Directors from "@/components/directors";

export default function DirectorsPage()
{
    const router = useRouter();
    console.log(router.query.id)
    const fetcher = (url) =>  fetch(url).then((res) => res.json());
   
    const [director, setDirector] = useState("");
    const [moviesDirected,setMoviesDirected] = useState([]);
    const {data,error}=  useSWR('/data/data.json',fetcher)
    function fetchDirectorData  (data) {
        if (!data) return;
        const dataInArr = [];
        for(let i in data)
        {
            if(i === "directors")
            dataInArr.push(...data[i]);
        }
        const moviesDirectedd = [];
        for(let i in data)
        {
            if(i === "movies")
            moviesDirectedd.push(...data[i]);
        }
        setDirector(dataInArr);
        setMoviesDirected(moviesDirectedd);
    }
   
    useEffect(()=>{
        fetchDirectorData(data);
    },[data])
    return (
        <div>

            <Directors details = {director} moviesDirected = {moviesDirected}/>
        </div>
    )
}