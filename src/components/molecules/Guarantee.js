import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import GuaranteeIcon from "../../resources/icons/icons8-guarantee.png";

const Guarantee = () => {
  return (
    <GuaranteeContainer>
      <ImgWrapper>
        <GuaranteeImg src={GuaranteeIcon} alt="guarantee icon" />
      </ImgWrapper>
      <GuaranteeTextWrapper>
        <MainText text="30 Days Return Guarantee" />
        <MainText text="phasellus bandit massam elim badit of passage varius nunc" />
      </GuaranteeTextWrapper>
    </GuaranteeContainer>
  );
};

export default Guarantee;

const GuaranteeContainer = styled.div`
  height: 450px;
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const ImgWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuaranteeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GuaranteeImg = styled.img`
  width: 40px;
  height: 40px;
`;
