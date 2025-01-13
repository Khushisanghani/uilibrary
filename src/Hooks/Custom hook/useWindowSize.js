import { useEffect, useState } from "react";

function useWindowSize(){
    const [windowSize,SetWindowSize] = useState({width:undefined,height:undefined});
    useEffect(() => {
        window.addEventListener('resize',handleSize)
        handleSize();

        return () => window.removeEventListener("resize",handleSize)
    },[])
    const handleSize = () => {
        SetWindowSize({width:window.innerWidth,height:window.innerHeight})
    }
    return windowSize;
}
export default useWindowSize;