import React from 'react';
import logo from '../assets/logo.png';

type Props = {
  width?: number;
  height?: number;
};

function Logo({ width, height }: Props) {
  return (
    <img src={logo} alt="logo" decoding="async" width={width} height={height} />
  );
}

export default Logo;
