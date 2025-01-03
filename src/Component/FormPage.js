import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import { useState } from "react";
// import { Form } from "react-router-dom";

function FormPage(){
    const [Input,setInput] = useState({
        name:'',
        email:'',
        password:'',
        terms:false,
        courses:'',
        gender:'',
    })
    const handleChange = (e) =>{
        setInput(prevState => ({
            ...prevState,
            [e.target.name] : [e.target.value],
        } ))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Input);
    }
    return(
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} >
                <TextField 
                    name="name"
                    type="text"
                    value={Input.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    sx={{margin:'20px'}}
                />
                <br />
                <TextField 
                    name="email"
                    type="email"
                    value={Input.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    sx={{margin:'20px'}}
                />
                 <br />
                <TextField 
                    name="password"
                    type="password"
                    value={Input.password}
                    onChange={handleChange}
                    placeholder="Enter Password"
                    sx={{margin:'20px'}}
                />
                <br />   
                <FormGroup>
                    <FormControlLabel 
                        label=" I Agree T & C " 
                        control={<Checkbox  
                                    onChange={() => setInput(prevState => ({
                                        ...prevState,
                                        terms:!Input.terms
                                    })
                                )}/>
                            } 
                        sx={{margin:'20px'}}/>
                </FormGroup>  <br/>
                <FormControl fullWidth>
                        <InputLabel id="menus">Courses</InputLabel>
                        <Select labelId="menu" id="menu-list" label="courses" name="courses"  value={Input.courses} onChange={handleChange}>
                            <MenuItem value={'mongodb'}>Mongodb</MenuItem>
                            <MenuItem value={'express'}>Express</MenuItem>
                            <MenuItem value={'node'}>Node</MenuItem>
                            <MenuItem value={'react'}>React</MenuItem>
                        </Select>
                </FormControl> <br/>
                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup 
                        name="gender"
                        defaultValue={'female'} 
                        onChange={handleChange}>
                            <FormControlLabel value={'male'} label="Male" 
                            control={<Radio/>}/>
                            <FormControlLabel value={'female'} label="Female" 
                            control={<Radio/>}/>
                             <FormControlLabel value={'other'} label="Other" 
                            control={<Radio/>}/>
                    </RadioGroup>
                </FormControl> <br/>      
                <Button type="submit" sx={{margin:'20px'}}>Submit</Button>
            </form>
        </>
    )
}
export default FormPage;