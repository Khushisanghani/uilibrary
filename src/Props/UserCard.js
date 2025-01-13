import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


function UserCard(Props){
    return(
        <>
           <Card sx={{maxWidth:300,margin:10}}>
                <CardMedia component={'img'} height="140" image="https://images.unsplash.com/photo-1733860531621-34d137d72c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D" alt="test img"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component='div'>{Props.name}</Typography>
                    <Typography variant="body2">This is {Props.des}.</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Delete</Button>
                </CardActions>
            </Card>
        </>
    )
}
export default UserCard;