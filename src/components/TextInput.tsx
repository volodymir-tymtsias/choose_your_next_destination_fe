import React, { memo, useState } from 'react';
import * as filtersOpenAction from '../features/filtersOpen';

type Props = {
  name: string;
  type: string;
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  value: string;
  setValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyInput: React.FC<Props> = ({
  name,
  type,
  label,
  placeholder = '',
  min,
  max,
  value,
  setValue,
}) => {

  return (
    <div className="textInput">
      <label className="textInput__label" htmlFor={name}>
        {label}
      </label>
      <div className="textInput__container">
        <input
          name={name}
          type={type}
          className="input input--has-icon-left"
          placeholder={placeholder}
          value={value}
          min = {min}
          max = {max}
          onChange={setValue}
          id={name}
        />
        <span className="textInput__icon-left">
          <i className={`icon icon--mask icon--${name}`}></i>
        </span>
      </div>
    </div>
  );
};

export const TextInput = memo(MyInput);