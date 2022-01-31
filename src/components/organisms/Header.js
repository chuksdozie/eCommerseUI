import React from "react";
import styled from "styled-components";
import Cart from "../../resources/images/cartpng.png";
import CartDot from "../../resources/images/cart-dot.png";

import SearchBar from "../molecules/SearchBar";

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar />
      <IconWrapper>
        <IconImg src={Cart} alt="a cart image" />
        <CartIconWrapper>
          <CartDott src={CartDot} alt="a black dot" />
          <CartDott src={CartDot} alt="a black dot" />
        </CartIconWrapper>
      </IconWrapper>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  align-items: center;
  column-gap: 51px;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconImg = styled.img`
  width: 23.75px;
  height: 16.76px;
`;

const CartDott = styled.img`
  width: 5.2px;
  height: 5.2px;
`;

const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
`;
