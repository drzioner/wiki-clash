import styled from "styled-components";

const Container = styled.div`
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "inherit")};
  background: ${(props) => (props.background ? props.background : "white")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "none"};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : "none")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  display: flex;
  flex-flow: ${(props) => (props.flexFlow ? props.flexFlow : "row wrap")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  margin: ${(props) => (props.margin ? props.margin : "0 0 1rem 0")};
  padding: ${(props) => (props.padding ? props.padding : "6rem 5% 0.5rem")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "inherit")};
  width: ${(props) => (props.width ? props.width : "90%")};
`;

export default Container;
