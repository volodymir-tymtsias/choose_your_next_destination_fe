import React, { ChangeEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
// import * as filtersAction from '../features/filters';
import classNames from 'classnames';
import { Activities } from '../types/Activities';

type TypeBox = 'button' | 'box';

type Props = {
  textLabel: Activities;
  onChange: (name: Activities) => ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
};

export const Activity: React.FC<Props> = ({ textLabel, onChange, checked }) => {
  const id = textLabel.toLowerCase();

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__invisible"
        checked={checked}
        onChange={onChange(textLabel)}
        id={id}
      />
      <label 
        htmlFor={id}
        className="checkbox__label checkbox__label--activities"
      >
        <span 
          className={classNames(
            'icon',
            'icon--check-box',
            { 'icon--check-box-active': checked},
          )}
        />
        <span className={`icon icon--label icon--mask icon--${id}`} />
        {textLabel}
      </label>
    </div>
  );
};
