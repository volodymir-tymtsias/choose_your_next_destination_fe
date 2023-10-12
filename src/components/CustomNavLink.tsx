import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  classes: string;
  activeClass: string;
  children: React.ReactNode;
};

export const CustomNavLink: React.FC<Props> = ({
  children,
  to,
  classes,
  activeClass,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames(
      classes,
      { [activeClass]: isActive },
    )}
  >
    {children}
  </NavLink>
);
