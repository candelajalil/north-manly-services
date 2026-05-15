import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../../assets/home_services/home1.jpg'
import img2 from '../../../assets/home_services/home2.jpg'
import img3 from '../../../assets/home_services/home3.jpg'
import img4 from '../../../assets/home_services/home4.jpg'
import img5 from '../../../assets/home_services/home5.jpg'
import img6 from '../../../assets/home_services/home6.jpg'
import img7 from '../../../assets/home_services/home7.jpg'
import img8 from '../../../assets/home_services/home8.jpg'
import img9 from '../../../assets/home_services/home9.jpg'
import img10 from '../../../assets/home_services/home10.jpg'

const HomeServCar = () => {
  // Array de imágenes de ejemplo
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
  ];

  return (
      <Carousel className='w-44'>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Carousel>
  );
};

export default HomeServCar;