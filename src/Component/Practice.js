// import { Delete } from '@mui/icons-material';
import './App.css';
// import Button from '@mui/material/Button';
import { Button,  IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
   <h1>Material UI</h1>
   <h4>Text Button</h4>
   <Button>Click me</Button>
   <Button color='inherit'>inherit</Button>
   <Button color='primary'>primary</Button>
   <Button color='secondary'>secondary</Button>
   <Button color='secondary' href='http://google.com'>link</Button>
   <Button disabled>disabled</Button>
   <h4>Contained Button</h4>
   <Button variant='contained'>contained </Button>
   <h4>outlined Button</h4>
   <Button variant='outlined'>outlined </Button>
   <h4>Button size</h4>
   <Button variant='contained' color='secondary' size='small'>small size button </Button>
   <Button variant='contained' color='secondary' size='medium'>medium size button </Button>
   <Button variant='contained' color='secondary' size='large'>large size button </Button>
   <h4>Button with icon</h4>
   <Button variant='contained' color='secondary' startIcon={<DeleteIcon/>}>Delete</Button>
   <Button variant='contained' color='secondary' endIcon={<DeleteIcon/>}>Delete</Button>
   <h4>icon button</h4>
   <IconButton variant='contained' color='secondary'>
  <DeleteIcon />
</IconButton>
<h4>Custom button</h4>
<Button variant='contained' color='secondary' style={{backgroundColor:"pink"}}>
  Custom button </Button>
export default function ImgMediaCard() {
 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://unsplash.com/s/photos/monitor-lizard"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  
}
   </>
  );
}

export default App;
