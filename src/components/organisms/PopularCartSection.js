import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import PopularProductCart from "../molecules/PopularProductCart";
import IphoneUpclose from "../../resources/images/phone-accessories.png";
import BeautyImage from "../../resources/images/health-beauty.png";
import FashionImage from "../../resources/images/Fashion.png";
import ElectronicsImage from "../../resources/images/electronics.png";

const imgData = [
  {
    id: 1,
    productImg: IphoneUpclose,
    productText: "Phones & Accessories",
    imgAlt: "back of an iphone upclose",
  },
  {
    id: 2,
    productImg: IphoneUpclose,
    productText: "Phones & Accessories",
    imgAlt: "back of an iphone upclose",
  },
  {
    id: 3,
    productImg: BeautyImage,
    productText: "Health & Beauty",
    imgAlt: "beauty products image",
  },
  {
    id: 4,
    productImg: FashionImage,
    productText: "Fashion",
    imgAlt: "a pink handbag",
  },
  {
    id: 5,
    productImg: ElectronicsImage,
    productText: "Electronics",
    imgAlt: "image of household electronics",
  },
  {
    id: 6,
    productImg: ElectronicsImage,
    productText: "Health and Beauty",
    imgAlt: "image of household electronics",
  },
];

const PopularCartSection = () => {
  return (
    <PopularCartSecWrapper>
      <MainText
        text="Popular Categories"
        fontSize="28px"
        fontWeight="600"
        fontFamily="Amiko"
        lineHeight="37.35px"
        color="#2c3452"
      />
      <ItemWrapper>
        {imgData.map((i, k) => (
          <PopularProductCart
            key={k}
            cProductImg={i.productImg}
            cAlt={i.imgAlt}
            cWidth={"140px"}
            cHeight={"140px"}
            cBorderRadius={"50%"}
            cText={i.productText}
          />
        ))}
      </ItemWrapper>
    </PopularCartSecWrapper>
  );
};

export default PopularCartSection;

const PopularCartSecWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 52px 0px;
  flex-direction: column;
  row-gap: 49px;
`;

const ItemWrapper = styled.div`
  display: flex;
  column-gap: 90px;
`;
