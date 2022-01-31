import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import Button from "../atoms/Button";
import IphoneHeroImage from "../../resources/images/hero-image.png";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroHeading>
        <HeadTextWrapper>
          <MainText
            text="Shop the Lastest Iphones"
            fontSize="58px"
            fontFamily="Montserrat"
            fontWeight="500"
            lineHeight="80px"
            color="#412c4e"
          />
        </HeadTextWrapper>
        <Button buttonText="Shop Now" />
      </HeroHeading>
      <HeroImageContainer>
        <img src={IphoneHeroImage} alt="iphone" />
      </HeroImageContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;

const HeroSectionContainer = styled.div`
  width: 100%;
  /* height: 396px; */
  padding: 60px;
  background-color: rgba(190, 17, 233, 0.22224);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 37px;
`;

const HeroHeading = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
`;

const HeadTextWrapper = styled.div`
  width: 100%;
`;

const HeroImageContainer = styled.div``;
