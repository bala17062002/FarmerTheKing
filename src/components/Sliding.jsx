import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Apple from '../images/apple.jpg';

function Sliding() {
    return (
        <div>

            <Carousel>
                {itemData.map((item) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`${item.link}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt="First slide"
                            width="500px"
                            height="350px"
                        />
                        <Carousel.Caption>
                            <h3>{item.heading}</h3>
                            <p>{item.descrip}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
const itemData = [
    {
        link: "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg",
        heading: "Apples",
        descrip: "Buynow"
    },
    {
        link: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg',
        heading: "First offer",
        descrip: "Buynow"
    },
    {
        link: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg',
        heading: "First offer",
        descrip: "Buynow"
    }
]

export default Sliding;