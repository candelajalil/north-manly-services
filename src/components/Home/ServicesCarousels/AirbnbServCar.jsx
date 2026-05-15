import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../../assets/airbnb_services/air1.png'
import img2 from '../../../assets/airbnb_services/air2.png'
import img3 from '../../../assets/airbnb_services/air3.png'
import img4 from '../../../assets/airbnb_services/air4.png'
import img5 from '../../../assets/airbnb_services/air5.png'
import img6 from '../../../assets/airbnb_services/air6.png'


const AirbnbServCar = () => {
  // Array de imágenes de ejemplo
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  return (
      <Carousel className='w-80'>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Imagen ${index + 1}`} />
          </div>
        ))}
      </Carousel>
  );
};

export default AirbnbServCar;