import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Container, Title, Img } from "../Styles";

import Header from "../Header";
import CardInfo from "../CardInfo";
import DetailsTable from "../DetailsTable";
import Levels from "../Levels";

import dataCards from "../../Hooks/db.json";

const ContainerCard = styled(Container)`
  align-items: center;
  background: ${(props) => (props.background ? props.background : "#F2B705")};
  border-radius: ${(props) => (props.back ? "0px 0px 25px 25px" : "15px")};
  color: #fafafa;
  display: flex;
  flex-flow: column;
  margin: ${(props) => (props.back ? "0rem 0rem 0.5rem" : "0.5rem")};
  padding: ${(props) => (props.back ? "0rem 5% 1rem" : "1rem 0.5rem")};
  padding-top: ${(props) => (props.back ? "6rem" : "1rem")};
  width: ${(props) => (props.back ? "90%" : "130px")};
`;

const TitleCard = styled(Title)`
  font-weight: 400;
`;

const ImgCard = styled(Img)`
  width: ${(props) => (props.back ? "250px" : "90px")};
`;

const cards = dataCards.cards;

const DetailsCard = () => {
  const { cardName } = useParams();
  const back = "true";

  let dataCard = [];

  cards.forEach((card) => {
    if (card.id === cardName) {
      dataCard = card;
    }
  });

  const {
    title,
    image,
    description,
    type,
    background,
    category,
    details,
    strengths,
    weaknesses,
    strategies,
    generalInformation,
    levels,
  } = dataCard;

  return (
    <>
      <Header back={back} background={background} title={title} />
      <ContainerCard back={back} background={background}>
        <ImgCard back={back} src={image} alt={title} />
        <Title fontSize={"200%"}>{type}</Title>
        <TitleCard fontSize={"150%"}>{category}</TitleCard>
      </ContainerCard>
      <Container background={"trasparent"} padding={"1.5rem 5% 0.5rem"}>
        <CardInfo
          title={"Descripción"}
          description={description}
          background={"#FFFFFF"}
          boxShadow={"0px 0px 3px #E9DDC1"}
          flexFlow={"row nowrap"}
          textAlign={"left"}
        />
        <CardInfo
          title={"Detalles"}
          description={details}
          boxShadow={"0px 0px 3px #E9DDC1"}
          background={"#FFFFFF"}
          flexFlow={"row nowrap"}
          textAlign={"left"}
        />
        <DetailsTable
          background={background}
          generalInformation={generalInformation}
        />
        <Levels levels={levels} />
        <CardInfo
          title={"Estrategias"}
          color={"#FAFAFA"}
          description={strategies}
          background={"#01ADC1"}
          flexFlow={"row nowrap"}
          textAlign={"left"}
        />
        <CardInfo
          title={"Fortalezas"}
          color={"#FAFAFA"}
          description={strengths}
          background={"#078C03"}
          flexFlow={"row-reverse nowrap"}
          textAlign={"right"}
        />
        <CardInfo
          title={"Debilidades"}
          color={"#FAFAFA"}
          description={weaknesses}
          background={"#F26D6D"}
          flexFlow={"row nowrap"}
          textAlign={"left"}
        />
      </Container>
    </>
  );
};

export default DetailsCard;
