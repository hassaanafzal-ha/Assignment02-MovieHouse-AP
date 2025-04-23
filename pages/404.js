import {useRouter} from "next/router";
import GoHome from "@/components/goHome";
export default function Error()
{
    const router = useRouter();

    const redirectToHome = ()=>
    {
        router.push("/");
    }
    return(
        <GoHome home = {redirectToHome}>
    </GoHome>
    )
}