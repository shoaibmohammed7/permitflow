import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";




const Admin = async ()=>{
    const session = await getServerSession(authConfig);
    
    if(session?.user){
        return <h2> Welcome Back {session?.user.username}</h2>
    }

    return (<h2> Please Login to see this admin page</h2>)
};

export default Admin;
// hsl(var(--foreground))