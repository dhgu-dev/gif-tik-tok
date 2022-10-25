import React from 'react';
import styled from 'styled-components';
import convert from '../../utils/convertSizeToLength';

interface Props {
  href: string;
  src: string;
  size: 'large' | 'medium' | 'small';
}

const AvatarContainer = styled.div`
  position: relative;
`;

const Image = styled.img<Pick<Props, 'size'>>`
  border-radius: 50%;
  width: ${({ size }) =>
    convert(size)({ large: 116, medium: 56, small: 32, unit: 'px' })};
  height: ${({ size }) =>
    convert(size)({ large: 116, medium: 56, small: 32, unit: 'px' })};
`;

function Avatar({ href, src, size }: Props) {
  return (
    <AvatarContainer>
      <a href={href}>
        <Image src={src} loading="lazy" size={size} />
      </a>
    </AvatarContainer>
  );
}

export default Avatar;
