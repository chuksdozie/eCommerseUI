import React from "react";
import styled from "styled-components";
// import OrangeDot from "../../resources/images/dot.png";
import { GoPrimitiveDot } from "react-icons/go";

const Pagination = () => {
  return (
    <PagiContainer>
      <PagiWrapper>
        <PagiOrange>
          <GoPrimitiveDot />
        </PagiOrange>
        <GoPrimitiveDot />
        <GoPrimitiveDot />
        <GoPrimitiveDot />
      </PagiWrapper>
    </PagiContainer>
  );
};

export default Pagination;

const PagiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const PagiWrapper = styled.div`
  display: flex;
  column-gap: 44px;
  color: #c4c4c4;
  font-size: 20px;
`;

const PagiOrange = styled.div`
  color: #ef5e0d;
`;
