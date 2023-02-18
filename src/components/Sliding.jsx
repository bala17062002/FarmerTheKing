import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Apple from '../images/apple.jpg';
import P1 from '../images/p1.jpeg';
import P2 from '../images/p2.jpeg';
import P3 from '../images/p3.jpeg';

function Sliding() {
    return (
        <div>

            <Carousel>
                {itemData.map((item) => (
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            style={{ width: "500px", height: "250px", marginLeft: "35%" }}
                            src={`${item.link}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt="First slide"


                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
const itemData = [
    {
        link: P2,
        heading: "Apples",
        descrip: "Buynow"
    },
    {
        link: P1,
        heading: "First offer",
        descrip: "Buynow"
    },
    {
        link: P3,
        heading: "First offer",
        descrip: "Buynow"
    }
]

export default Sliding;