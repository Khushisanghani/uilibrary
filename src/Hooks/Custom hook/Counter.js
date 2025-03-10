import useCounter from "./useCounter"

function Counter(){
    const [count,Increment,Decrement] = useCounter();
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
        </>
    )
}
export default Counter;