import React, { useEffect } from "react";
import '../App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
function Hpage(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (<div>
    <div style={{}}>
      <ImageList sx={{
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",
        marginLeft: "40%",
        justifyContent: "center",
        height: "100vh"


      }}
        cols={3} onClick={props.onClick}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ width: "200px", height: "200px", marginLeft: "10%", marginTop: "5px", marginBottom: "12px" }}>
            <div style={{ direction: "flex", flexDirection: "column" }}>
              <div>
                <Link to={item.path}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    key={item.title}
                    className="image"
                    data-aos={"fade-left"}
                  />
                </Link>
              </div>
              <div>
                <ImageListItemBar
                  title={item.title}
                  data-aos={"fade-up"}
                  sx={{ zIndex: 1 }}
                />
              </div>
            </div>


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
    title: 'Products',
    path: '/organicshop'

  }
]
export default Hpage;