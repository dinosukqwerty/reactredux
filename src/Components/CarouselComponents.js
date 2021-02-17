import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { image1 } from '../img/1.jpg';
const items = [
  {
    src: {image1},
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: '',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: '',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const CarouselComponents = () => <UncontrolledCarousel items={items} />;

export default CarouselComponents;