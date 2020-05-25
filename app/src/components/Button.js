import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <Container>
      <figure>
        <div>
          <span>Hover Me</span>
          <span>Button</span>
        </div>
      </figure>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 10%;
`;

export default Button;
