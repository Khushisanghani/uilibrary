// Functional component me side effect task perform karne k liye
// settimmer,setinterval,dom directly update,data fatch
// class componet lifecycle method functional componet me use karne k liye useEffect 
import { useEffect, useState } from "react";
function Counter(){
        const [count,setCount] = useState(0);
        const [total,setTotal] = useState(1);
        // useEffect syntax
        // first => side-effect function
        // second => clean-up function
        // third =>dependanci list
        // useEffect(() => {
        //     First              

        //     return () => {
        //     second
        //     }
        // },[third]);
        // run on every render
        // useEffect(()=>{
        //     alert("I will run on each render")
        // })
        // that runs on only first render
        // useEffect(()=>{
        //     alert("I will run only first render")
        // },[])
        // runs count is update
        // useEffect(()=>{
        //     alert("I will run every time when count is update")
        // },[count])
        // multiple dependancies
        // useEffect(()=>{
        //         alert("I will run every time when count/total is update");
        // },[count,total])
        // add cleanup function
        useEffect(() => {
              alert("count is update");             
    
                return () => {
                alert("count is unmounted from ui")
                }
            },[count]);
        function handleClick(){setCount(count+1)}
        function handleClickTotal(){setTotal(total+1)}
        return(
            <>
                <h1>Count {count}</h1>
                <button onClick={handleClick}>Count</button>
                <br/>
                <h1>Total {total}</h1>
                <button onClick={handleClickTotal}>Total</button>
            </>
        )
}
export default Counter;