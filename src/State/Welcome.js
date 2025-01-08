import { Component } from "react";

// FUNCTIONAL COMPONENT
// function Welcome(props) {
//     return <h1>Hello {props.name}</h1>;
// }

// CLASS COMPONENT
class Welcome extends Component{
    render(){
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}
export default Welcome;