import React, {useEffect} from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";
import Slider from "react-slick";
import "./carousel.css";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

const sliderData = [
  {
    id: 0,
    company: "Google",
    image: "logo-google.png",
  },
  {
    id: 1,
    company: "IBM",
    image: "logo-ibm.png",
  },
  {
    id: 2,
    company: "Microsoft",
    image: "logo-microsoft.png",
  },
  {
    id: 3,
    company: "HP",
    image: "logo-hp.png",
  },
  {
    id: 4,
    company: "Vector",
    image: "logo-vector-graphics.png",
  },
];
const Carousel = () => {
  const slides = sliderData.map((sl) => {
    const imageUrl = `/assets/${sl.image}`;

    return (
      <Stack
        key={sl.id}
        className="carousel-item-stack"
        alignItems="center"
        height={[28,16]}
        justifyContent="center"
      >
        <Image alt={sl.company} justifySelf="center" src={imageUrl} />;
      </Stack>
    );
  });
  const sliderRef = React.useRef<Slider>(null);

  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 5,
          slidesPerRow: 1
        },
      },
    ],
  };

  useEffect(() => {
    function slide(y: number) {
      if (sliderRef) {
        y > 0 ? sliderRef.current!.slickNext() : sliderRef.current!.slickPrev();
      }
    }
    const sliderContainer = document.getElementById("carousel");

    if (sliderContainer) {
      sliderContainer.addEventListener("wheel", (e) => {
        e.preventDefault();
        slide(e.deltaY);
      });
    }
  }, []);

  return (
    <>
      <Stack
        className="Carousel"
        id="carousel"
        paddingBottom={16}
        paddingTop={32}
        paddingX={[0,32]}
        width="100%"
        overflow="hidden"
      >
        <Slider {...settings} ref={sliderRef}>
          {slides}
          {slides}
        </Slider>
      </Stack>
    </>
  );
};

export default Carousel;
