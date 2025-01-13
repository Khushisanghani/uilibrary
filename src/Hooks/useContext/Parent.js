// parent se data child ko send karne k liye 



import { createContext, useState } from "react";
import ChildA from "./ChildA";
// step 1 : create context
const UserContext = createContext();
// step 2 : wrap all the child inside a provider 
// step 3 : consume
function Parent(){
    const [user,setUser] = useState({name:"khushi"})
    return(
        <>
            <UserContext.Provider value={user}>
            <ChildA/>
            </UserContext.Provider>
        </>
    )
}
export default Parent;
export{UserContext}