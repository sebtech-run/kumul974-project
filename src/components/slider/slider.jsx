import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import imagetwo from '../../assets/slides/image2.jpg';
import imagethree from '../../assets/slides/image3.jpg';



import '../style/slider/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <div>
         <Carousel>
      <Carousel.Item >
        <img className='image-slider' src={imagetwo} text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='image-slider' src={imagetwo} text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='image-slider' src={imagethree} text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
            
        </div>
    );
};

export default Slider;