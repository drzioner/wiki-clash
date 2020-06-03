import styled from "styled-components";

const Img = styled.img`
  filter: drop-shadow(0 2px 5px grey);
  width: ${(props) => (props.width ? "250px" : "90px")};
`;

export default Img;
