

import { Dashboard } from "@/components/dashboard";
import { SessionLogin } from "@/components/sessionlogin";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";



export default async function(){

    const  session = await getServerSession(authConfig);

    

    if(session?.user){
    return <div>
       
    <Dashboard></Dashboard>

    </div>
    }
    return (<SessionLogin></SessionLogin>)
}
