import React from 'react';
import styled from 'styled-components';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentDots, FaShare } from 'react-icons/fa';
import Avatar from '../Avatar';
import Button from '../Button';
import CircleIcon from '../CircleIcon';
import Gif from '../Gif';
import UserName from '../UserName';

const TikTokItemContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  margin-bottom: 1.5rem;
`;

const Contents = styled.div`
  max-width: 500px;
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  padding-bottom: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    left: -60px;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: rgba(22, 24, 35, 0.2);
    -webkit-transform: scaleY(0.5);
    -moz-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
`;

const TextInfoContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  Button {
    position: absolute;
    top: 0.7rem;
    right: 0;
  }
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 1.5rem;
`;

const GifContainer = styled.div`
  max-width: 280px;
  width: 60%;
  height: calc(380px + (100vw - 480px) / 288 * 20);
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Figure = styled.span`
  color: rgba(22, 24, 35, 0.75);
  font-size: 12px;
  line-height: 17px;
  font-weight: bold;
`;

function TikTokItem() {
  return (
    <TikTokItemContainer>
      <Avatar
        href="/id"
        size="medium"
        src="https://robohash.org/hicveldicta.png?size=50x50&set=set1"
      />
      <Contents>
        <TextInfoContainer>
          <UserName
            direction="row"
            href="/id"
            name="atuny0"
            email="atuny0@sohu.com"
            size="medium"
          />
          <span className="title">Happy Dancing GIF</span>
          <Button text="팔로우" width="88px" height="28px" />
        </TextInfoContainer>
        <VideoContainer>
          <GifContainer>
            <Gif
              src="https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy.mp4"
              isRoundBorder
              poster="https://media1.giphy.com/media/cZ7rmKfFYOvYI/giphy_s.gif"
            />
          </GifContainer>
          <div className="Icons">
            <IconContainer>
              <CircleIcon icon={<BsHeartFill />} size="large" />
              <Figure>124K</Figure>
            </IconContainer>
            <IconContainer>
              <CircleIcon icon={<FaCommentDots />} size="large" />
              <Figure>124K</Figure>
            </IconContainer>
            <IconContainer>
              <CircleIcon icon={<FaShare />} size="large" />
              <Figure>124K</Figure>
            </IconContainer>
          </div>
        </VideoContainer>
      </Contents>
    </TikTokItemContainer>
  );
}

export default TikTokItem;
