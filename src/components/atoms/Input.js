import React from "react";
import styled from "styled-components";

const Input = () => {
  return <StyledInput type="text" placeholder="search anything" />;
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
`;
