import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import ProductImage from "../atoms/ProductImage";

const PopularProductCart = (props) => {
  //the c in front of the variables is to differentiate the products in different components
  const { cProductImg, cAlt, cText, cHeight, cWidth, cBorderRadius } = props;

  return (
    <PopularCartContainer>
      <ProductImage
        productImg={cProductImg}
        alt={cAlt}
        height={cHeight}
        width={cWidth}
        border-radius={cBorderRadius}
      />
      <MainText
        text={cText}
        fontFamily="Amiko"
        fontSize="16px"
        fontWeight="400"
        lineHeight="21.34px"
        color="#2c3452"
      />
    </PopularCartContainer>
  );
};

export default PopularProductCart;

const PopularCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
`;
