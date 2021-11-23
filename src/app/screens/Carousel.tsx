import React, {useEffect} from "react";
import {Button, Image, Stack, StackDivider, Text} from "@chakra-ui/react";
import Slider from "react-slick";
/* import "../slider.css"; */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderData = [
  {
    id: 0,
    company: "Google",
    image: "logo-google.png",
  },
  {
    id: 1,
    company: "Google",
    image: "logo-google.png",
  },
  {
    id: 2,
    company: "Google",
    image: "logo-google.png",
  },
  {
    id: 3,
    company: "Google",
    image: "logo-google.png",
  },
  {
    id: 4,
    company: "Google",
    image: "logo-google.png",
  },
];
const Carousel = () => {
  const slides = sliderData.map((sl) => {
    const imageUrl = `/assets/${sl.image}`;

    return <Image key={sl.id} alt={sl.company} height={32} src={imageUrl} width={32} />;
  });
  const sliderRef = React.useRef<Slider>(null);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    window.addEventListener("wheel", (e) => {
      slide(e.deltaY);
    });
  }, []);

  return (
    <>
      <Stack className="Carousel" height={96}>
        <Slider {...settings} ref={sliderRef}>
          {slides}
        </Slider>
      </Stack>
    </>
  );
};

export default Carousel;
