import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from 'reactstrap';

import satu from "../img/1.jpg";
import dua from "../img/2.jpg";
import tiga from "../img/3.jpg";

const items = [
  {
    src: satu,
    altText: '1',
    caption: 'Caption 1',
  },
  {
    src: dua,
    altText: '2',
    caption: 'Caption 2'
  },
  {
    src: tiga,
    altText: '3',
    caption: 'Caption 3'
  },
  ];

const CarouselComponents = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width: 1200, height: 590}} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (

    <Container style={{backgroundColor:"#D0EAFA"}}>
      <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      >

      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </Container>
    
  );
}

export default CarouselComponents;