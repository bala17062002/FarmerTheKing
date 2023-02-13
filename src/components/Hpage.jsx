import React, {  useState }from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
function Hpage(props){
 // const[type,settype] = useState();
  //function ck(event){
   // settype(
         
    //)
  //}
    return(<div>
        <div style={{alignItems:"center",marginRight:"50%",marginLeft:"30%"}}>
    <ImageList sx={{ width: 600, height: 200,margin:"5px",}} cols={3} onClick={props.onClick}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{aligncontent:"center"}} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            //onClick={ck.bind(item.title)}
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
        </div>

    </div>)
}
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'SoilTest',
      author: '@bkristastucchio',
     
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'FarmerLoan',
      author: '@rollelflex_graphy726',
      
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Organic Products',
      author: '@helloimnik',
      
    }
]
export default Hpage;