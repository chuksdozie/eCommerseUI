import React from "react";
import styled from "styled-components";

const BestSellerProductImg = (props) => {
  const { bestSellImg, alt, height, width, text } = props;
  return (
    <BestSellProductImg
      src={bestSellImg}
      alt={alt}
      height={height}
      width={width}
      text={text}
    />
  );
};

export default BestSellerProductImg;

const BestSellProductImg = styled.img`
  width: 170px;
  height: 159px;
`;
