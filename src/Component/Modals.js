import { Box, Button, Link, Modal, Typography } from "@mui/material";
import { useState } from "react";

function Modals(){
    const [open,setOpen] = useState(false);
    return(
        <>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box position='absolute' top='50%' left='50%'> 
                    <Typography>This is Modal</Typography> 
                    <Button variant="contained" onClick={() => setOpen(false)}>Cancle</Button>
                </Box>
            </Modal>

            <Link variant="h4" color="secondary" href="https://mui.com/material-ui/" underline="hover">
                Nav Link
            </Link>
        </>
    )
}
export default Modals;