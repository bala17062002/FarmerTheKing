import React from "react";
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
function Hpage(props) {
  return (<div>
    <div style={{}}>
      <ImageList sx={{ overflow: "hidden" }} cols={3} onClick={props.onClick}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ width: "200px", height: "200px", margin: "5px" }}>
            <Link to={item.path}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                key={item.title}
                width="200px"
                height="200px"
              />
            </Link>
            <ImageListItemBar
              title={item.title}
              sx={{ width: "200px", height: "0.8cm", alignContent: "center" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>

  </div>)
}
const itemData = [
  {
    img: 'https://anaconlaboratories.com/wp-content/uploads/2021/02/Agricultural-Soil-Testing-Importance-450x500.jpg',
    title: 'soiltest',
    path: '/soiltest'

  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Farmer Loan',
    path: '/loan'


  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'OrganicProducts',
    path: '/'

  }
]
export default Hpage;