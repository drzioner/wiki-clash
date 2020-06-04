import React from "react";
import { Container } from "../Styles";

import Card from "../Card";
import Header from "../Header";

import dataCards from "../../Hooks/cards.json";

const Home = () => {
  const cards = dataCards.items;
  let count = 3;
  return (
    <>
      <Header />
      <Container>
        {cards.map((card, index) => {
          if (index < count) {
            console.log("count", count);
            const { id, iconUrls, name, background } = card;
            const image = iconUrls.medium;
            const title = name
              .split(".")
              .join("")
              .split(" ")
              .join("-")
              .toLowerCase();

            return (
              <Card
                key={id}
                background={background}
                image={image}
                title={name}
                type={"Regular"}
                url={title}
              />
            );
          }
          return false;
        })}
      </Container>
    </>
  );
};

export default Home;
