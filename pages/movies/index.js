import path from "path";
import fs from "fs";
import MoviesDisplay from "@/components/movies";
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

    const dataInArr = [];
    for(let i in dataa)
    {
        if(i === "movies")
        dataInArr.push(...dataa[i]);
    }

    return {
        props:
        {
            data:dataInArr
        },
        revalidate:60
    }
 

}

export default function MoviesPage({data})
{
    return(
        <div>
           <MoviesDisplay details = {data}/>
        </div>
    )
}