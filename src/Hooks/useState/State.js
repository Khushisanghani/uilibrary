import { useEffect, useState } from "react";

function State(){
   
    const [count,setCount] = useState(0);
    // useEffect(()=>{
    //     alert("I will run on each render")
    // })
    // useEffect(()=>{
    //     alert("I will run only first render")
    // },[])
    useEffect(()=>{
        alert("I will run every time when count is update")
    },[count])
    function handleClick(){
        setCount(count+1)
    }
    return(
        <>
            <h1>Count {count}</h1>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}
export default State;