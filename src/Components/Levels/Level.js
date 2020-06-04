import React from "react";
import styled from "styled-components";

import { Container, Title } from "../Styles";

const ContainerLevel = styled(Container)`
  margin: 3rem 0.5rem 1.8rem 0;
  position: relative;
  max-width: 100%;
`;

const ContainerCard = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  width: 33%;
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 150%;
    margin: 0;
    padding: 0;
  }
`;

const TitleLevel = styled(Title)`
  font-size: 241%;
  line-height: normal;
  margin: 0;
  padding: 0;
  max-height: max-content;
  height: max-content;
  position: absolute;
  top: -2.3rem;
  text-shadow: 0px 0px 2px #023859;
  left: 9%;
  white-space: nowrap;
`;

const Level = ({
  title,
  background,
  flexFlow,
  color,
  boxShadow,
  lifePoints,
  hurt,
  damagePerSecond,
}) => {
  return (
    <ContainerLevel
      alignContent={"center"}
      alignItems={"end !important"}
      background={background}
      borderRadius={"15px"}
      boxShadow={boxShadow}
      flexFlow={flexFlow}
      color={color}
      justifyContent={"space-between"}
      margin={"1rem 0"}
      padding={"1.2rem 5% 0.5rem"}
      width={"70%"}
    >
      <TitleLevel fontSize={"120%"} width={"100%"}>
        {title}
      </TitleLevel>
      <Container
        alignContent={"center"}
        alignItems={"center"}
        background={"trasparent"}
        justifyContent={"space-between"}
        margin={"0"}
        padding={"0"}
        width={"94%"}
      >
        <ContainerCard>
          <Title fontSize={"50%"} width={"100%"}>
            Puntos de vida
          </Title>
          <p>{lifePoints}</p>
        </ContainerCard>
        <ContainerCard>
          <Title fontSize={"90%"} width={"100%"}>
            Daño
          </Title>
          <p>{hurt}</p>
        </ContainerCard>
        <ContainerCard>
          <Title fontSize={"50%"} width={"100%"}>
            Daño por segundo
          </Title>
          <p>{damagePerSecond}</p>
        </ContainerCard>
      </Container>
    </ContainerLevel>
  );
};

export default Level;
