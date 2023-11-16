import React, { createRef, useEffect, useMemo } from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const modalRoot = document.getElementById('modal-root');

export const Modal: React.FC<Props> = ({ children }) => {
  const modalContainer = useMemo(() => document.createElement('div'), []); 

  useEffect(() => {
    modalRoot?.appendChild(modalContainer);

    return () => {
      modalRoot?.removeChild(modalContainer);
    }
  }, []);

  return modalRoot 
    ? createPortal(children, modalContainer)
    : null;
};
