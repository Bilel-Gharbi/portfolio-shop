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
        </TitleContainer>

        {/* swiper */}
        <SwiperWidth>
          <FlipEffect />
        </SwiperWidth>

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
  display: flex;
  width: 100%;
  height: calc(100vh - 33px);
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Montserrat";
`;

const TitleContainer = styled.div`
  text-align: center;
  font-size: 20px;
`;
const Text = styled.h3`
  letter-spacing: 3px;
  font-size: 36px;
  color: white;
`;
const SwiperWidth = styled.div`
  width: 100vw;
  max-width: 100vw;
`;
