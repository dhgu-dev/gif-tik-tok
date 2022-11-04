import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  isFill?: boolean;
  width?: string;
  height?: string;
  text: string;
  grayScale?: boolean;
  onClick?: () => void;
};

const CustomButton = styled.button<Omit<Props, 'onClick' | 'text'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  box-sizing: border-box;
  padding: 6px 8px;

  ${({ width, height }) => {
    const pattern =
      /^(-?\d+(em|ex|%|px|cm|mm|in|pt|pc|ch|rem|vh|vw|vmin|vmax)|0)$/;
    const regex = new RegExp(pattern, 'i');
    const widthCSS = css`
      width: ${width && regex.test(width) ? width : '88px'};
    `;
    const heightCSS = css`
      height: ${height && regex.test(height) ? height : '28px'};
    `;
    return css`
      ${widthCSS}
      ${heightCSS}
    `;
  }}

  ${({ isFill, grayScale }) => {
    if (isFill) {
      return css`
        background-color: ${grayScale
          ? 'rgba(22, 24, 35, 0.12)'
          : 'rgba(254, 44, 85, 1)'};
        border: none;
        color: white;
        &:hover {
          background-color: ${grayScale ? 'rgba(22, 24, 35, 0.24)' : '#f2204a'};
          cursor: pointer;
        }
      `;
    }
    return css`
      background-color: #ffffff;
      color: ${grayScale ? 'black' : 'rgba(254, 44, 85, 1)'};
      border: 1px solid
        ${grayScale ? 'rgba(22, 24, 35, 0.12)' : 'rgba(254, 44, 85, 1)'};
      &:hover {
        background-color: ${grayScale ? 'rgba(22, 24, 35, 0.06)' : '#fdeaed'};
        cursor: pointer;
      }
    `;
  }}
`;

function Button({
  isFill = false,
  width,
  height,
  text,
  onClick,
  grayScale = false,
}: Props) {
  return (
    <CustomButton
      type="button"
      width={width}
      height={height}
      isFill={isFill}
      grayScale={grayScale}
      onClick={onClick}
    >
      {text}
    </CustomButton>
  );
}

export default Button;
