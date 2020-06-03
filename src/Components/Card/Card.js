import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container, Title, Img } from "../Styles";

const ContainerCard = styled(Container)`
  align-items: center;
  background: ${(props) => (props.background ? props.background : "#F2B705")};
  border-radius: 15px;
  display: flex;
  flex-flow: column;
  margin: 0.5rem;
  padding: 1rem 0.5rem;
  width: 130px;
  a {
    align-items: center;
    background: transparent;
    color: #fafafa;
    display: flex;
    flex-flow: column;
    margin: 0;
    padding: 0;
    text-decoration: none;
    text-shadow: 0px 0px 3px grey;
    width: 130px;
  }
`;

const TitleCard = styled(Title)`
  font-size: 70%;
  font-weight: 400;
`;

const Card = ({ image, title, type, background, url }) => {
  return (
    <ContainerCard background={background}>
      <Link to={"/" + url}>
        <Img src={image} alt={title} />
        <Title>{title}</Title>
        <TitleCard>{type}</TitleCard>
      </Link>
    </ContainerCard>
  );
};

export default Card;
