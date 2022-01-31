import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import DeliveryTruck from "../../resources/icons/icons8-fast-delivery.png";

const Services = () => {
  return (
    <ServiceContainer>
      <ImgWrapper>
        <DeliveryImg src={DeliveryTruck} alt="a delivery truck" />
      </ImgWrapper>
      <ServiceTextWrapper>
        <MainText text="Free Delivery" />
        <MainText text="phasellus bandit massam elim badit of passage varius nunc" />
      </ServiceTextWrapper>
    </ServiceContainer>
  );
};

export default Services;

const ServiceContainer = styled.div`
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

const ServiceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeliveryImg = styled.img`
  width: 40px;
  height: 40px;
`;
