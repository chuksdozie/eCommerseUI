import React from "react";
import styled from "styled-components";
import Iphone11Image from "../../resources/images/iphone11.png";
import RefridgeratorImage from "../../resources/images/Refridgerator.png";
import MainText from "../atoms/MainText";
import BestSellProductCard from "../molecules/BestSellProductCard";

const bestSellData = [
  {
    id: 1,
    bestSellProductImg: Iphone11Image,
    productTxt: "Iphone11",
    priceTxt: "$ 300",
    priceSlash: "$ 300",
    priceDiscount: "-30%",
  },
  {
    id: 2,
    bestSellProductImg: RefridgeratorImage,
    productTxt: "Refridgerator",
    priceTxt: "$300",
    priceSlash: "$ 300",
    priceDiscount: "-30%",
  },
  {
    id: 3,
    bestSellProductImg: Iphone11Image,
    productTxt: "Iphone11",
    priceTxt: "$300",
    priceSlash: "$ 300",
    priceDiscount: "-30%",
  },
  {
    id: 4,
    bestSellProductImg: RefridgeratorImage,
    productTxt: "Refridgerator",
    priceTxt: "$300",
    priceSlash: "$ 300",
    priceDiscount: "-30%",
  },
];

const BestSellerSection = (props) => {
  const { sectionName } = props;
  return (
    <BestSellerSecContainer>
      <MainText
        text={sectionName}
        fontFamily="Amiko"
        fontWeight="600"
        fontSize="28px"
        lineHeight="37.35px"
        color="#2c3452"
      />
      <ProductItemWrapper>
        {bestSellData.map((i, k) => (
          <BestSellProductCard
            key={k}
            sBestSellImg={i.bestSellProductImg}
            sAlt={i.bestSellAlt}
            sHeight={"170px"}
            sWidth={"159px"}
            productNameTxt={i.productTxt}
            priceTxt={i.priceTxt}
            priceSlashTxt={i.priceSlash}
            discountTxt={i.priceDiscount}
          />
        ))}
      </ProductItemWrapper>
    </BestSellerSecContainer>
  );
};

export default BestSellerSection;

const BestSellerSecContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 53px;
`;

const ProductItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
