import React from "react";
import styled from "styled-components";

const ProductImage = (props) => {
  const { productImg, alt, height, width } = props;
  return (
    <ProductImg src={productImg} alt={alt} height={height} width={width} />
  );
};

export default ProductImage;

const ProductImg = styled.img`
  height: 140px;
  width: 140px;
  border-radius: 50%;
`;
