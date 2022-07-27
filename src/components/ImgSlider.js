import React, { useEffect } from "react";
import { useState, useRef } from "react";

const ImgSlider = ({ slides }) => {
  //   const imgUrlContainer = slides.map((item) => {
  //     return item.imgUrl;
  //   });
  //   console.log(imgUrlContainer);
  // url만 추출하는 배열 만듦
  //근데 세개 동시에 랜더를 어캐해야할지 하나도 떠오르지 않음

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].imgUrl})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "40%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "40%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    //바뀔일이 없고 콜백을 기억
    //그러니 다시 재 랜더되지 않음
    //내가 넣은 콜백함수를 기억하는 useRef가 된것임
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      //콜백을 실행시켜주는 함수

      if (delay !== null) {
        let id = setInterval(tick, delay);
        //id는 내가 넣은 콜백을 실행시켜주고 delay는 내가 인자에 기입한 second가 됨
        return () => {
          clearInterval(id);
        };
      }
    }, [delay]);
  }
  useInterval(goToNext, 3000);
  //처음상태야 그렇기때문에 초기값 0번쨰 인덱스인거고
  //0일때 length -1
  //아닐땐 currentIndex - 1인게 맞지 왜냐하면 0이아닌경우는 음수와 양수인데 인덱스는 음수일수 없기때문에 양수임
  //양수 -1 은 이전이 맞음

  //마지막 슬라이드가 0인지 확인하고싶어 그래서 마지막이면 눌렀을때 첫번째로 가야하고
  //마지막이 아니라면 +1 이되는 조건이야 .
  //   useEffect(() => {
  //     const automaticSlider = setTimeout(() => {
  //       const isLastSlide = currentIndex === slides.length - 1;
  //       const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //       setCurrentIndex(newIndex);
  //     }, 3000);
  //   }, [currentIndex]);
  //   clearInterval(automaticSlider);

  //    const automaticSlider = setTimeout(() => {
  //      const isLastSlide = currentIndex === slides.length - 1;
  //      const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //      setCurrentIndex(newIndex);
  //    }, 3000);

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ≪
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ≫
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyle}
            onClick={() => {
              goToSlide(slideIndex);
            }}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
