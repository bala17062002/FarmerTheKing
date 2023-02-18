import React from "react";
import '../App.css';
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
function Hpage(props) {
  return (<div>
    <div style={{}}>
      <ImageList sx={{
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",
        marginLeft: "40%",
        justifyContent: "center"
      }} cols={3} onClick={props.onClick}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ width: "200px", height: "200px", margin: "5px" }}>
            <Link to={item.path}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                key={item.title}
                className="image"
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

  </div >)
}
const itemData = [
  {
    img: 'https://anaconlaboratories.com/wp-content/uploads/2021/02/Agricultural-Soil-Testing-Importance-450x500.jpg',
    title: 'soiltest',
    path: '/soiltest'

  },
  {
    img: 'https://oulms.in/wp-content/uploads/2020/08/f-1.jpg',
    title: 'Farmer Loan',
    path: '/loan'


  },
  {
    img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMGZhcm1pbmd8ZW58MHx8MHx8&w=1000&q=80',
    title: 'organicProducts',
    path: '/organicshop'

  }
]
export default Hpage;