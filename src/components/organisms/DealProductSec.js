import React from "react";
import styled from "styled-components";
import BestSellerSection from "./BestSellerSection";

const DealProductSec = () => {
  return (
    <DealContainer>
      <BestSellerSection sectionName="Deal of the Day" />
    </DealContainer>
  );
};

export default DealProductSec;

const DealContainer = styled.div``;
