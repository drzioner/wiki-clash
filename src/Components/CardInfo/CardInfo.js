import React from "react";
import styled from "styled-components";

import { Container, Title } from "../Styles";

const ContainerCardInfo = styled(Container)`
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 80%;
  }
`;

const CardInfo = ({
  title,
  description,
  background,
  textAlign,
  flexFlow,
  color,
  boxShadow,
}) => {
  return (
    <Container
      alignContent={"center"}
      alignItems={"center"}
      background={background}
      borderRadius={"15px"}
      boxShadow={boxShadow}
      flexFlow={flexFlow}
      color={color}
      justifyContent={"space-between"}
      margin={"1rem 0"}
      padding={"1.2rem 5% 0.5rem"}
      width={"100%"}
    >
      <ContainerCardInfo
        background={"transparent"}
        margin={"0"}
        padding={"0.2rem 5%"}
        textAlign={textAlign}
        width={"90%"}
      >
        <Title fontSize={"120%"} width={"100%"}>
          {title}
        </Title>
        <p>{description}</p>
      </ContainerCardInfo>
    </Container>
  );
};

export default CardInfo;
