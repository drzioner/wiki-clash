import React from "react";
import styled from "styled-components";

import Level from "./Level";
import { Container } from "../Styles";

const ContainerLevels = styled(Container)`
  margin: 0;
  display: inline-flexbox !important;
  flex-flow: row nowrap;
  overflow: scroll;
  padding: 0;
  position: relative;
  width: 100%;
`;

const Levels = ({ levels }) => {
  return (
    <ContainerLevels>
      {levels.map((step) => {
        const { lifePoints, hurt, damagePerSecond, level } = step;
        return (
          <Level
            key={level}
            title={"Nivel " + level}
            color={"#FAFAFA"}
            description={"weaknesses"}
            background={"#023859"}
            flexFlow={"column nowrap"}
            textAlign={"left"}
            lifePoints={lifePoints}
            hurt={hurt}
            damagePerSecond={damagePerSecond}
          />
        );
      })}
    </ContainerLevels>
  );
};

export default Levels;
