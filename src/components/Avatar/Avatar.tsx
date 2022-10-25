import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  src: string;
  size: 'large' | 'medium' | 'small';
}

const AvatarContainer = styled.div`
  position: relative;
`;

const sizeToPx = (size: 'large' | 'medium' | 'small') => {
  if (size === 'large') return '116px';
  if (size === 'medium') return '56px';
  return '32px';
};

const Image = styled.img<Pick<Props, 'size'>>`
  border-radius: 50%;
  width: ${({ size }) => sizeToPx(size)};
  height: ${({ size }) => sizeToPx(size)};
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
