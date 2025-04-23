import path from "path";
import fs from "fs";
import TrendingMovie from "@/components/trendingMovies";
import {useRouter} from "next/router";
import { notFound } from "next/navigation";
export async function getStaticProps()
{
    const filePath = path.join(process.cwd(),'data','data.json');
    const fileData = fs.readFileSync(filePath);
    const dataa = JSON.parse(fileData);  

    if(!dataa || dataa.movies.length===0)
    {
      return {
        notFound:true
      }
    }

    return {
        props:{
            data: dataa
        },
        revalidate:60
    }
}

function Home({data})
{
    const moviesarr = [];
    const router = useRouter();
    for (let i in data)
    {
        if(i === "movies")
        moviesarr.push(...data[i]);
    }
    const redirectToGenre= ()=>
    {
        router.push("/genres");
    }
    return(
        <div>
            <div>
                <TrendingMovie movies = {moviesarr} click = {redirectToGenre}/>
            </div>
        </div>
    )
}

export default Home;
