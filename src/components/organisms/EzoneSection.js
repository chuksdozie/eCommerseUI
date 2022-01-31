import React from "react";
import MainText from "../atoms/MainText";
import EzoneWoman from "../../resources/images/womanezone.png";
import styled from "styled-components";

const EzoneSection = () => {
  return (
    <EzoneSecContainer>
      <EzoneTextWrapper>
        <MainText
          text="Ezone Ecommerce"
          fontFamily="Amiko"
          fontSize="49px"
          fontWeight="700 "
          color="#fff"
          lineHeight="85px"
        />
        <MainText
          text="lorem ipsum sit amet, consectetur adiipiscing elit"
          fontFamily="Amiko"
          fontSize="18px"
          fontWeight="600 "
          color="#fff"
          lineHeight="29px"
        />
      </EzoneTextWrapper>
      <EzoneCommerceImgWrapper>
        <Image src={EzoneWoman} alt="beautiful woman with glasses" />
      </EzoneCommerceImgWrapper>
    </EzoneSecContainer>
  );
};

export default EzoneSection;

const EzoneSecContainer = styled.div`
  width: 100%;
  background: linear-gradient(39.27deg, #cc4cec 65.38%, #be11e9 72.02%);
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
`;

const EzoneTextWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;
  padding: 100px;
`;

const Image = styled.img`
  width: 620px;
  height: 345px;
`;

const EzoneCommerceImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
