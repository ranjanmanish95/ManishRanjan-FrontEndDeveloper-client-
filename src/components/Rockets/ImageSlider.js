import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "85%",
    position: "relative"
  };

  const titleStyles = {
    height: "15%",
    position: "relative",
    color: "#fff",
    fontSize: "32px",
    display: "flex",
    justifyContent: "center"
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer"
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center"
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "100px",
    color: "#fff"
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className={classes.containerStyles}>
        <div style={sliderStyles}>
          <div style={leftArrowStyles} onClick={goToPrevious}>
            <BsFillArrowLeftCircleFill />
          </div>
          <div style={rightArrowStyles} onClick={goToNext}>
            <BsFillArrowRightCircleFill />
          </div>
          <div style={slideStyles}></div>
        </div>
        <div style={titleStyles}>{slides[currentIndex].title}</div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => goToSlide(slideIndex)}
          >
            &#8228;
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
