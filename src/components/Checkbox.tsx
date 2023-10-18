import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import * as tagsAction from '../features/tags';
import classNames from 'classnames';
import { Tags } from '../types/Tags';

type TypeBox = 'button' | 'box';

type Props = {
  textLabel: Tags,
  typeBox: TypeBox,
};

export const Checkbox: React.FC<Props> = ({ textLabel, typeBox }) => {
  const tags = useAppSelector(state => state.tags.tags);
  const dispatch = useAppDispatch();
  const id = textLabel.toLowerCase();
  const checked = !!tags.find(tag => tag === textLabel);

  const onCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      dispatch(tagsAction.deleteTags(textLabel));
    } else {
      dispatch(tagsAction.addTags(textLabel));
    }
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__invisible"
        checked={checked}
        onChange={onCheckedHandler}
        id={id}
      />
      <label 
        htmlFor={id}
        className={classNames(
          'checkbox__label',
          { 'button button--tags': typeBox === 'button' },
          { 'button--tags-active': typeBox === 'button' && checked},
        )}
      >
        {id !== 'all' && (<span className={`icon icon--${id}`}></span>)}
        {textLabel}
      </label>
    </div>
  );
};
