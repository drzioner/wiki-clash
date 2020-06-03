import React from "react";
import styled from "styled-components";

import { Container, Title } from "../Styles";

const ContainerTable = styled(Container)`
  align-items: center;
  background: ${(props) =>
    props.background ? props.background : "trasparent"};
  border-radius: 15px;
  color: #ffffff;
  display: flex;
  flex-flow: column;
  margin: 1rem 0;
  padding: 1.8rem 0rem;
  text-shadow: 0px 0px 3px grey;
  width: 100%;
`;

const TitleCard = styled(Title)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "85%")};
  font-weight: 400;
  text-align: left;
  width: 86%;
`;

const FontSize = (fontSize) => {
  return fontSize
    ? fontSize.length < 20
      ? fontSize.length < 12
        ? fontSize.length < 8
          ? fontSize.length < 4
            ? "200%"
            : "180%"
          : "160%"
        : "140%"
      : "110%"
    : "100%";
};

const DetailsTable = ({ details, background }) => {
  const {
    attackSpeed,
    speed,
    deploymentTime,
    scope,
    objectives,
    cost,
    rarity,
    type,
    quantity,
    sand,
  } = details;
  return (
    <ContainerTable background={background}>
      <Title fontSize={"140%"} margin={"0 0 1.2rem"}>
        Información general
      </Title>
      <TitleCard>Velocidad de ataque</TitleCard>
      <Title fontSize={FontSize(attackSpeed)} width={"86%"}>
        {attackSpeed}
      </Title>
      <TitleCard>Velocidad</TitleCard>
      <Title fontSize={FontSize(speed)} width={"86%"}>
        {speed}
      </Title>
      <TitleCard>Tiempo de despliegue</TitleCard>
      <Title fontSize={FontSize(deploymentTime)} width={"86%"}>
        {deploymentTime}
      </Title>
      <TitleCard>Alcance</TitleCard>
      <Title fontSize={FontSize(scope)} width={"86%"}>
        {scope}
      </Title>
      <TitleCard>Objetivos</TitleCard>
      <Title fontSize={FontSize(objectives)} width={"86%"}>
        {objectives}
      </Title>
      <TitleCard>Costo</TitleCard>
      <Title fontSize={FontSize(cost)} width={"86%"}>
        {cost}
      </Title>
      <TitleCard>Rareza</TitleCard>
      <Title fontSize={FontSize(rarity)} width={"86%"}>
        {rarity}
      </Title>
      <TitleCard>Tipo</TitleCard>
      <Title fontSize={FontSize(type)} width={"86%"}>
        {type}
      </Title>
      <TitleCard>Cantidad</TitleCard>
      <Title fontSize={FontSize(quantity)} width={"86%"}>
        {quantity}
      </Title>
      <TitleCard>Arena</TitleCard>
      <Title fontSize={FontSize(sand)} width={"86%"}>
        {sand}
      </Title>
    </ContainerTable>
  );
};

export default DetailsTable;
