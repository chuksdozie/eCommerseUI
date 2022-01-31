import React from "react";
import styled from "styled-components";
import CallToActionSection from "./CallToActionSec";
import DealProductSec from "./DealProductSec";
import EzoneSection from "./EzoneSection";
import Footer from "./Footer";

const SecondarySec = () => {
  return (
    <Container>
      <EzoneSection />
      <DealProductSec />
      <CallToActionSection />
      <Footer />
    </Container>
  );
};

export default SecondarySec;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;
