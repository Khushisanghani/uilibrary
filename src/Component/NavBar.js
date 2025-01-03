import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

function NavBar(){
    const [Value,setValue] = useState(0);
    return(
        <>
        <AppBar>
            <Toolbar>
                <Typography variant="h4">LOGO</Typography>
                <Tabs 
                    sx={{marginLeft:'auto'}} 
                    textColor="inherit" 
                    onChange={(e,val) => setValue(val) } 
                    value={Value}  
                    indicatorColor="secondary">
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Contact" />
                </Tabs>
            </Toolbar>
        </AppBar>
        </>
    )
}
export default NavBar;