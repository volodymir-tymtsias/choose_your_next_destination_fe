import React, { useState } from 'react';
import '../styles/utils/_variables.scss';
import { TextInput } from './TextInput';

type Props = {
  maxValue: number;
  minValue: number;
  currentMin: number;
  currentMax: number;
  setCurrentPriceMin: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPriceMax: React.Dispatch<React.SetStateAction<number>>;
};

export const PriceRange: React.FC<Props> = ({
  maxValue,
  minValue,
  currentMin,
  currentMax,
  setCurrentPriceMin,
  setCurrentPriceMax,
}) => {

  //The minimum gap between the sliders in percent, if necessary, can be 0
  let minGap = Math.round(maxValue / 100 * 2);
  const percent1 = ((currentMin - minValue) / (maxValue - minValue)) * 100;
  const percent2 = ((currentMax - minValue) / (maxValue - minValue)) * 100;
  const bgTrack = `linear-gradient(to right, #ff6961 ${percent1}% ,` 
    + ` #87bfff ${percent1}% ,#87bfff ${percent2}%, #30db5b ${percent2}%)`;

  function slideOne(e: React.ChangeEvent<HTMLInputElement>){
    if(currentMax - +e.target.value <= minGap){
      setCurrentPriceMin(currentMax - minGap);
    } else {
      setCurrentPriceMin(+e.target.value);
    }
  }

  function slideTwo(e: React.ChangeEvent<HTMLInputElement>){
    if(+e.target.value - currentMin <= minGap){
      setCurrentPriceMax(currentMin + minGap);
    } else {
      setCurrentPriceMax(+e.target.value);
    }
  }

  return (
    <div className="price-range">
      <div className="price-range__title">
        Price range
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
              value={currentMin}
              onChange={slideOne}
            />
            <input 
              className="price-range__range"
              type="range" 
              min={minValue} 
              max={maxValue} 
              step={1}
              value={currentMax} 
              onChange={slideTwo}
            />
      </div>

      <div className="price-range__inputs">
        <TextInput
          name='priceMin'
          type='number'
          label='Minimum'
          value={currentMin.toString()}
          min={minValue} 
          max={maxValue}
          setValue={slideOne}
        />

        <TextInput
          name='priceMax'
          type='number'
          label='Maximum'
          value={currentMax.toString()}
          min={minValue} 
          max={maxValue}
          setValue={slideTwo}
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


