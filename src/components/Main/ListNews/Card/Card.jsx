import React, { Component } from "react";
import CardM from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Card extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: this.props.data.title || "Noticia"
    }
  }

  render() {
    const { title, abstract, url} = this.props.data
    const img = this.props.data.multimedia[0].url

    return <CardM id="card" sx={{ maxWidth: 345 }}>
      <div className="cardContainer">
    <CardMedia
      id="media"
      component="img"
      height="140"
      image={img}
      alt="green iguana"
    />        
      </div>

    <CardContent>
      <Typography id="title" gutterBottom variant="p" component="div">
        {title}
      </Typography>
      <Typography id="description" variant="body2" color="text.secondary">
      {abstract}
      </Typography>
    </CardContent>
    <CardActions>
      <Button href={url} target="_blank" size="small">Learn More</Button>
    </CardActions>
  </CardM>
  }
}

export default Card;
