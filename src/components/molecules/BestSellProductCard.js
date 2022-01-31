import React from "react";
import styled from "styled-components";
import BestSellerProductImg from "../atoms/BestSellerProductImg";
import { BsStarFill } from "react-icons/bs";
import { RiStarHalfFill } from "react-icons/ri";
import MainText from "../atoms/MainText";

const BestSellProductCard = (props) => {
  const {
    sBestSellImg,
    sAlt,
    sHeight,
    sWidth,
    sText,
    productNameTxt,
    priceTxt,
    priceSlashTxt,
    discountTxt,
  } = props;

  return (
    <BestSellProductContainer>
      <BestSellerCardWrapper>
        <BestSellerProductImg
          bestSellImg={sBestSellImg}
          alt={sAlt}
          height={sHeight}
          width={sWidth}
          // text={sText}
        />

        <BestSellProductDetails>
          <MainText
            text={productNameTxt}
            fontSize="16px"
            fontWeight="600"
            fontFamily="Amiko"
            color="#2c3452"
          />

          <BestSellPriceWrapper>
            <MainText
              text={priceTxt}
              fontSize="16px"
              fontWeight="bold"
              fontFamily="Amiko"
              color="#000000"
            />
            <MainText
              text={priceSlashTxt}
              fontSize="10px"
              fontWeight="normal"
              fontFamily="Amiko"
              lineHeight="13px"
              color="#c5c5c5"
              textDecorationLine="line-through"
            />
            <MainText
              text={discountTxt}
              fontSize="10px"
              fontWeight="normal"
              fontFamily="Amiko"
              lineHeight="13px"
              color="#45b75e"
            />
          </BestSellPriceWrapper>
          <StarIconsWrapper>
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <RiStarHalfFill />
          </StarIconsWrapper>
        </BestSellProductDetails>
      </BestSellerCardWrapper>
    </BestSellProductContainer>
  );
};

export default BestSellProductCard;

const BestSellProductContainer = styled.div`
  /* background-color: yellow; */
  width: 100%;

  height: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 32px;
  column-gap: 35px;
`;

const BestSellerCardWrapper = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 45px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(223, 238, 245, 0.25);
  cursor: pointer;
`;

const BestSellProductDetails = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const BestSellPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const StarIconsWrapper = styled.div`
  display: flex;
  color: #ef5e0d;
  column-gap: 5px;
`;
