import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { ArrowForwardIosRounded } from '@mui/icons-material';
import './Card.css';

export default function ActionCard({ title, description, imageurl }) {

  const [hovered, setHovered] = useState(false);

  function handleMouseEnter() {
    setHovered(true);
  }

  function handleMouseLeave() {
    setHovered(false);
  }
  const card = hovered ? {
    margin: "1rem",
    transform: 'translate(5px)',
    transition: ' .5s  ease-in-out ',
    backgroundColor: '#000000',
    boxShadow: '3px 5px 41px -5px rgba(57,255,20,0.64)',
  } : {
    margin: "1rem",
    transition: ' .5s  ease-in-out ',
    backgroundColor: '#000000',
  };

  const btn = hovered ? {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '1rem 0px',
    border: '.5px solid #5cf3d055',
    transition: ' .5s  ease-in-out ',
    backgroundColor: 'black',
    boxShadow: '20px 10px 192px 11px rgba(98,246,176)',
    transform: 'scale(1.2)'
  } : {
    textDecoration: 'none',
    paddingTop: "10px 0px",
    margin: '1rem 0px',
    border: '.5px solid #5cf3d055',
    backgroundColor: 'black',
    transition: ' .5s  ease-in-out ',
    
  };
  const styles = {
    text: {
      color: '#39ff14 ',
      padding: '10px',
      paddingTop: '-10px',
      margin: '10px',
    }
  };

  return (
    <Card style={card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia

          component="img"
          height="140"
          image={imageurl}
          alt="OWASP TOP 10"
        />
        <CardContent>
          <Typography   gutterBottom variant="h5" component="div">
            <h5 className='Title' style={styles.text} > {title} </h5> 
          </Typography>
          <Typography style={styles.text} className='Description' variant="body2" color="text.secondary">
            {description}
          </Typography>
          < Link to="/playground" state={{ url1: "Sample url" }} >
            <Typography align='center'>
              <button variant="text"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={btn} >
                Let's Go
              </button>
            </Typography>
          </Link>

        </CardContent>
      </CardActionArea>
    </Card>




  );
}

