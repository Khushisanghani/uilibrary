import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useState } from "react";

function Cards(){
    
        const [open,setOpen] = useState(false);
    return(
        <>
            <Card sx={{maxWidth:300,margin:20}}>
                <CardMedia component={'img'} height="140" image="https://images.unsplash.com/photo-1453487021979-5b739b2849f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D" alt="test img"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>Fruits</Typography>
                    <Typography variant="body2">A fruit is the soft, pulpy part of a flowering plant that contains seeds. It is formed from the ovaries of angiosperms and is exclusive only to this group of plants.</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary" onClick={() => setOpen(true)}>Delete</Button>
                </CardActions>
            </Card>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Are You Sure</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are You Sure Delete This Products ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancle</Button>
                    <Button>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default Cards;