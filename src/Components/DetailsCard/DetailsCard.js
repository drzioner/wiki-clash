import React from "react";
import styled from "styled-components";

import { Container, Title, Img } from "../Styles";

import Header from "../Header";
import CardInfo from "../CardInfo";
import DetailsTable from "../DetailsTable";

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

const dataCard = {
  title: "Caballero",
  image:
    "https://api-assets.clashroyale.com/cards/300/jAj1Q5rclXxU9kVImGqSJxa4wEMfEhvwNQ_4jiGUuqg.png",
  description:
    "Un aguerrido luchador cuerpo a cuerpo, mucho más apuesto y culto que su primo lejano, el bárbaro. Se rumorea que el único motivo por el que fue nombrado caballero es la genialidad de su bigote.",
  background: "#F2B705",
  type: "Común",
  category: "Tropa",
  details:
    "Puede obtenerse de los cofres una vez alcanzado el entrenamiento. Se necesitan 3 unidades de elíxir para desplegar esta carta.",
  strengths:
    "El caballero tiene puntos de vida e inflige daño considerablemente alto, lo que lo vuelve una útil unidad de ataque. Gracias a su velocidad de ataque, no está tan desprotegido contra hordas de tropas como el P.E.K.K.A.",
  weaknesses: "No ataca aire, por lo que, es muy vulnerable a unidades aéreas.",
  strategies:
    "Al ser una unidad con alta vida y bajo coste, puede ser usada para defender unidades de despeje como el mago, mosquetera o verdugo cuando estas vienen a una de las torres de coronas.",
  generalInformation: {
    attackSpeed: "1.2 segundos",
    speed: "Media",
    deploymentTime: "1 segundo",
    scope: "Cuerpo a cuerpo",
    objectives: "Terrestres",
    cost: "3 elixir",
    rarity: "Común",
    type: "Tropa",
    quantity: "1",
    sand: "Entrenamiento",
  },
};

const DetailsCard = () => {
  const back = true;
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
  } = dataCard;

  return (
    <>
      <Header back={back} background={background} title={title} />
      <ContainerCard back={back}>
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
        <DetailsTable background={background} details={generalInformation} />
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
