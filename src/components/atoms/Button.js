import React from "react";
import Styled from "styled-components";

const Button = (props) => {
  const { buttonText, margin } = props;
  return <SearchButton margin={margin}>{buttonText}</SearchButton>;
};

export default Button;

const SearchButton = Styled.button`
  width: 177px;
  height: 47px;
  margin: ${(props) => props.margin};
  font-size: 16px;
  font-weight: 500;
  background-color: #ef5e0d;
  color: #fff;
  border-radius: 30px;
  line-height: 28px;
  border: none;
  cursor: pointer;
  &:hover {
    background: #a74209;
    color: #fcdfcf;
  }

`;
