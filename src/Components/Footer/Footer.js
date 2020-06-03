import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background: #222222;
  border-radius: 25px 25px 0px 0px;
  color: white;
  display: flex;
  flex-flow: column;
  margin: 1rem 0 0 0;
  padding: 1.25rem 0% 0.25rem;
  width: 100%;
`;

const Copy = styled.div`
  background: transparent;
  border: none;
  border-top: 1px solid palevioletred;
  color: #fafafa;
  font-size: 70%;
  margin: 0;
  margin-top: 1rem;
  padding: 0;
  padding-bottom: 1.1rem;
  padding-top: 1rem;
  text-align: center;
  width: 100%;
`;

const Small = styled.small`
  background: transparent;
  color: #fafafa;
  font-size: 60%;
  margin: 0.5rem 0 0;
  padding: 0;
  text-align: center;
  width: 100%;
`;

const PoliticaSupercell = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-flow: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.row ? "space-around" : "center")};
  margin: 0;
  padding: ${(props) => (props.row ? "0" : "0 5%")};
  width: 90%;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <PoliticaSupercell>
        <PoliticaSupercell row>
          <img
            src="https://cdn.supercell.com/supercell.com/200601124627/supercell.com/files/clashroyale_logo.png"
            alt="logo clash royale"
            width="150"
          />
          <img
            src="https://cdn.supercell.com/supercell.com/200601124627/supercell.com/files/media_logo_supercell_white2x.png"
            alt="logo supercell"
            width="50"
          />
        </PoliticaSupercell>
        <Small>
          Este contenido no está afiliado, respaldado, patrocinado o aprobado
          específicamente por Supercell y Supercell no es responsable de ello.
          Para obtener más información, consulte la Política de contenido de
          fans de Supercell.
        </Small>
      </PoliticaSupercell>
      <Copy>Wiki Clash 2020 | Todos los derechos reservados</Copy>
    </FooterStyle>
  );
};

export default Footer;
