import { Grid, Hidden } from '@material-ui/core';
import React from 'react';
import Slider from 'react-slick';

import '../styles/components/serieSlider';

import useStyles from '../styles/components/serieSlider';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import image from '../images/dairanger-big.jpeg';

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Hidden smDown>
      <ArrowForwardIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050' }}
      />
    </Hidden>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Hidden smDown>
      <ArrowBackIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050' }}
      />
    </Hidden>
  );
}

const SerieSlider = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className={classes.sliderWrapper}>
      <Grid container className={classes.sliderContainer}>
        <Grid item xs={6}>
          <img src={image} alt="A" />
        </Grid>
        <Grid item xs={6}>
          <h1>Dairanger</h1>
        </Grid>
      </Grid>
      <Grid container className={classes.sliderContainer}>
        <Grid item xs={6}>
          <img src={image} alt="A" />
        </Grid>
        <Grid item xs={6}>
          <h1>Dairanger</h1>
        </Grid>
      </Grid>
      <Grid container className={classes.sliderContainer}>
        <Grid item xs={6}>
          <img src={image} alt="A" />
        </Grid>
        <Grid item xs={6}>
          <h1>Dairanger</h1>
        </Grid>
      </Grid>
    </Slider>
  );
};

export default SerieSlider;