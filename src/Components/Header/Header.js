import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const HeaderStyle = styled.header`
  align-items: center;
  background: ${(props) => (props.background ? props.background : "white")};
  border-radius: ${(props) => (props.back ? "0px 0px 25px 25px" : "none")};
  color: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 0 0 1rem 0;
  padding: 1.25rem 5% 1.5rem;
  position: fixed;
  top: 0;
  width: 90%;
  z-index: 10;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Logo = styled.h1`
  font-family: "Poppins";
  margin: 0;
  padding: 0;
`;

const IconHeader = styled(FontAwesomeIcon)`
  visibility: ${(props) => (props.back ? "hidden" : "visibility")};
`;

const Header = ({ back, title = "Wiki Clash", background = "white" }) => {
  return (
    <HeaderStyle back={back} background={background}>
      {back ? (
        <Link to="/">
          <IconHeader icon={faArrowLeft} size={"2x"} />
        </Link>
      ) : (
        <IconHeader icon={faBars} size={"2x"} />
      )}
      <Logo>{title}</Logo>
      <IconHeader icon={faSearch} size={"2x"} back={back} />
    </HeaderStyle>
  );
};

export default Header;
