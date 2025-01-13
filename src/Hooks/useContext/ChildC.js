import { useContext } from "react";
import { UserContext } from "./Parent";

function ChildC(){
    const user = useContext(UserContext);
    return(
        <>{user.name}</>
    )
}
export default ChildC;