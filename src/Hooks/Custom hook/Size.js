import useWindowSize from "./useWindowSize";
function Size(){
    const {width,height} = useWindowSize();
    console.log(width,height);
    return(
        <>
            <h1>Window Width: {width}px</h1>
            <h1>Window Height: {height}px</h1>
        </>
    )
}
export default Size;