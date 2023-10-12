import React, { useState } from 'react';
import '../styles/utils/_variables.scss';

type Props = {
  maxValue: number,
  minValue: number,
};

export const PriceRange: React.FC<Props> = ({
  maxValue,
  minValue,
}) => {
  const [rangeValue1, setRangeValue1] = useState(minValue);
  const defaultValue2 = Math.round(maxValue / 100 * 70);
  const [rangeValue2, setRangeValue2] = useState(defaultValue2);
  let minGap = Math.round(maxValue / 100 * 5);
  let sliderTrack = document.querySelector(".slider-track");
  const percent1 = ((rangeValue1 - minValue) / (maxValue - minValue)) * 100;
  const percent2 = ((rangeValue2 - minValue) / (maxValue - minValue)) * 100;
  const bgTrack = `linear-gradient(to right, #ff6961 ${percent1}% ,` 
    + ` #87bfff ${percent1}% ,#87bfff ${percent2}%, #30db5b ${percent2}%)`;

  function slideOne(e: React.ChangeEvent<HTMLInputElement>){
    if(rangeValue2 - +e.target.value <= minGap){
      setRangeValue1(rangeValue2 - minGap);
    } else {
      setRangeValue1(+e.target.value);
    }
  }

  function slideTwo(e: React.ChangeEvent<HTMLInputElement>){
    if(+e.target.value - rangeValue1 <= minGap){
      setRangeValue2(rangeValue1 + minGap);
    } else {
      setRangeValue2(+e.target.value);
    }
  }

  return (
    <div className="price-range">
      <div className="price-range__title">
        Price range
      </div>
      <div className="price-input">
        <div className="field">
          <span>Min</span>
          <input type="number" value="300" className="min-input" />
        </div>
        <div className="seperator">-</div>
        <div className="field">
          <span>Max</span>
          <input type="number" value="3500" className="max-input" />
        </div>
      </div>
      <div className="price-range__container">
            <div 
              className="price-range__track"
              style={{background: bgTrack}}
            ></div>
            <input 
              className="price-range__range"
              type="range" 
              min={minValue} 
              max={maxValue} 
              step={1}
              value={rangeValue1}
              onChange={slideOne}
            />
            <input 
              className="price-range__range"
              type="range" 
              min={minValue} 
              max={maxValue} 
              step={1}
              value={rangeValue2} 
              onChange={slideTwo}
            />
      </div>
    </div>
  );
};



// const priceInputs = document.querySelectorAll(".price-input input");
// const rangeInputs = document.querySelectorAll(".range-input input");
// const range = document.querySelector(".slider .progress");

// let priceGap = 1000;

// priceInputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     let minPrice = parseInt(priceInputs[0].value);
//     let maxPrice = parseInt(priceInputs[1].value);

//     if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
//       if (e.target.classNameName === "min-input") {
//         rangeInputs[0].value = minPrice;
//         range.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
//       } else {
//         rangeInputs[1].value = maxPrice;
//         range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
//       }
//     }
//   });
// });

// rangeInputs.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     let minVal = parseInt(rangeInputs[0].value);
//     let maxVal = parseInt(rangeInputs[1].value);

//     if (maxVal - minVal < priceGap) {
//       if (e.target.classNameName === "min-range") {
//         rangeInputs[0].value = maxVal - priceGap;
//       } else {
//         rangeInputs[1].value = minVal + priceGap;
//       }
//     } else {
//       priceInputs[0].value = minVal;
//       priceInputs[1].value = maxVal;
//       range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
//       range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
//     }
//   });
// });


