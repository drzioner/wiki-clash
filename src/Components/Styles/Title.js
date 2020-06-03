import styled from "styled-components";

const Title = styled.h2`
  font-family: "Poppins";
  font-weight: 700;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "inherit")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export default Title;
