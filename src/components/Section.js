import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImage,
  arrow,
}) {
  return (
    <Wrap bgImg={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText ? <RightButton>{rightBtnText}</RightButton> : <div />}
          </ButtonGroup>
          {arrow ? <DownArrow src="/images/down-arrow.svg" /> : <DownArrow />}
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: #393c41;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  margin-bottom: 20px;
`;
