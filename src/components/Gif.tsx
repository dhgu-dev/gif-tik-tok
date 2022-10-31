import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string;
  isRoundBorder?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  poster?: string;
};

const Video = styled.video<Pick<Props, 'isRoundBorder'>>`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: ${({ isRoundBorder }) => (isRoundBorder ? '4px' : 0)};
`;

function Gif({ src, isRoundBorder, controls, autoPlay, loop, poster }: Props) {
  return (
    <Video
      isRoundBorder={isRoundBorder}
      muted
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      poster={poster}
    />
  );
}

export default Gif;
