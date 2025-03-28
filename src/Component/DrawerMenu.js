import { Alert, Button, Drawer, List, ListItemButton, ListItemText, Snackbar } from "@mui/material";
import { useState } from "react";
import Welcome from "../State/Welcome";

function DrawerMenu(){
    const [open,setOpen] = useState(false);
    // state = {
    // open = false
    //  }
    // 
    const courses = ['React JS','Node JS','MongoDB','JavaScript','Magento']
    return(
        <>
            <Button variant='contained' onClick={() => setOpen(true)}>Open</Button>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {
                        courses.map(course => (
                            <ListItemButton onClick={() => setOpen(false)}>
                                <ListItemText primary={course} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Drawer>

        <br/> <br/> <br/> <br/> <br/>
        <Snackbar open='true' autoHideDuration={2000}>
            <Alert severity="success">This is alert in Snackbar</Alert>
        </Snackbar>
        <br/> <br/> <br/> <br/> <br/>
        <div>
                <Welcome name="Welcome to react js project" />
        </div>
        <br/> <br/> <br/> <br/> <br/>
        </>
    )
}
export default DrawerMenu;