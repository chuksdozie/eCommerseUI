import React from "react";
import styled from "styled-components";
import CopyRight from "../atoms/CopyRight";

import FooterAbout from "./FooterAbout";
import FooterServiceSection from "./FooterServiceSection";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterAbout />
      <FooterServiceSection />
      <CopyRight />
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
