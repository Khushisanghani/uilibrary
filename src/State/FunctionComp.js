import { useState } from "react";

function FunctionComp(){
    const [name, setName] = useState('Khushi');
    const [age, setAge] = useState(42);
    const handleNameChange = (e) => {
        setName(e.target.value);
      }
    const handleAgeChange = () => {
        setAge(age + 1);
      }
    return(
        <>
            <h1>Functional Componant</h1>
            <input
                value={name}
                onChange={handleNameChange}
            />
            <button onClick={handleAgeChange}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age}.</p>
        </>
    )
}
export default FunctionComp;