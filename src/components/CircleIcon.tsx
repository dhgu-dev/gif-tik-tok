import React from 'react';
import styled, { css } from 'styled-components';
import convert from '../utils/convertSizeToLength';

type Props = {
  icon: JSX.Element;
  size: 'large' | 'small';
  active?: boolean;
};

const CircleIconContainer = styled.span<Pick<Props, 'size' | 'active'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: ${({ size }) => convert(size)({ large: 48, small: 24, unit: 'px' })};
  height: ${({ size }) => convert(size)({ large: 48, small: 24, unit: 'px' })};
  margin: 8px 0 6px 0;
  background-color: rgba(22, 24, 35, 0.06);
  color: black;
  font-size: ${({ size }) =>
    convert(size)({ large: 24, small: 12, unit: 'px' })};

  ${({ active }) =>
    active &&
    css`
      color: rgba(254, 44, 85, 1);
      background-color: #fdeaed;
    `}
`;

function CircleIcon({ icon, size, active }: Props) {
  return (
    <CircleIconContainer size={size} active={active}>
      {icon}
    </CircleIconContainer>
  );
}

export default CircleIcon;
