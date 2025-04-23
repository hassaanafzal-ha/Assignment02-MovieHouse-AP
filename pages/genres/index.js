import path from "path";
import fs from "fs";
import GenreDetails from "@/components/genres";
export async function getServerSideProps()
{
    const filePath = path.join(process.cwd(),'data','data.json');
    const fileData = fs.readFileSync(filePath);
    const dataa = JSON.parse(fileData); 

    if (!dataa || dataa.movies.length === 0) {
        return {
            notFound: true,
        };
    }
    
    const dataInArr = [];
    for(let i in dataa)
    {
        if(i === "genres")
        dataInArr.push(...dataa[i]);
    }
    console.log("genre dataaa" ,dataInArr);
    return {
        props:{
            data:dataInArr
        }
    }
}
export default function Genres({data})
{
    return(
        <div>
            <GenreDetails details = {data}/>
        </div>
    )
}
