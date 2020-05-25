import React from "react";
import styled from "styled-components";
import FlipEffect from "./Swiper";
import Background from "./Background";
import Button from "./Button";

import "./App.css";

const App = () => {
  return (
    <>
      <Background />

      <SwiperContainer>
        <TitleContainer>
          <Text>text description </Text>
          <Text>text description </Text>
          <Text>text description </Text>
          <Text>text description </Text>
        </TitleContainer>
        <FlipEffect />

        <Button />
      </SwiperContainer>

      <footer>
        <p>made with 💕</p>
      </footer>
    </>
  );
};

export default App;

const SwiperContainer = styled.div`
  margin-top: 20%;
  position: absolute;
  width: 100%;
  font-family: "Montserrat";
`;
const TitleContainer = styled.div`
  position: absolute;
  font-size: 20px;
  left: 50%;
  top: -20%;
  transform: translate(-50%, -50%);
`;
const Text = styled.h3`
  letter-spacing: 3px;
  font-size: 36px;
  color: white;
`;
