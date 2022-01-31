import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import FooterIconImg from "../atoms/FooterIconImg";

const FooterServiceItem = (props) => {
  const {
    fFooterIcon,
    fAlt,
    footerH1Text,
    footerDesText,
    footerDesText2,
    fWidth,
    fHeight,
  } = props;

  return (
    <FooterItemContainer>
      <FooterImgWrapper>
        <FooterIconImg
          footerIcon={fFooterIcon}
          alt={fAlt}
          width={fWidth}
          height={fHeight}
        />
      </FooterImgWrapper>
      <FooterTextWrapper>
        <MainText
          text={footerH1Text}
          fontSize={"16px"}
          fontWeight={"700"}
          color={"#2c3452"}
          fontFamily={"Amiko"}
        />
        <MainText
          text={footerDesText}
          fontSize={"14px"}
          fontWeight={"500"}
          color={"#2c3452"}
          fontFamily={"Montserrat"}
        />
        <MainText
          text={footerDesText2}
          fontSize={"14px"}
          fontWeight={"500"}
          color={"#2c3452"}
          fontFamily={"Montserrat"}
        />
      </FooterTextWrapper>
    </FooterItemContainer>
  );
};

export default FooterServiceItem;

const FooterItemContainer = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;

const FooterImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  padding: 15px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 5px;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
