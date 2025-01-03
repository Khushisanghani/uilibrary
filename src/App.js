import FormPage from "./Component/FormPage";
import AccordionEx from "./Component/AccordionEx";
import Cards from "./Component/Cards";
import Containers from "./Component/Containers";
import DrawerMenu from "./Component/DrawerMenu";
import ListComponent from "./Component/ListComponent";
import Modals from "./Component/Modals";
import NavBar from "./Component/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <FormPage/>
             <Cards/>
             <Modals/>
             <Containers/>
             <ListComponent/>
             <AccordionEx/>
             <DrawerMenu/>
           
        </>
    )
}
export default App;