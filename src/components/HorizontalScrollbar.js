import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BodyPart from './BodyPart'
import ExerciseCard from "./ExerciseCard";

import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="slick-arrow slick-prev">
    <img src={LeftArrowIcon} alt="left-arrow" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="slick-arrow slick-next">
    <img src={RightArrowIcon} alt="right-arrow" />
  </button>
);

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
  <Slider {...settings}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {isBodyParts ? (
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </Slider>
);

export default HorizontalScrollbar;
