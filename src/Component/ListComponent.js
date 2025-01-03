import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function ListComponent(){
    const name =[ 'khushi','Hetvi','Hetal','Priti'];
    return(
        <>
            <List sx={{width:250,background:'gray'}}>
                {name.map(name=>(
                    <ListItem>
                        <ListItemButton>{'>'}</ListItemButton>
                        <ListItemText primary={name}/>
                    </ListItem>
                ))}
                
            </List>
        </>
    )
}
export default ListComponent;