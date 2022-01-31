import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const SubscribeBar = () => {
  return (
    <SubscribeBarContainer>
      <StyledInput type="text" placeholder="Enter your Email" />
      <Button buttonText="Subscribe" />
    </SubscribeBarContainer>
  );
};

export default SubscribeBar;

const SubscribeBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  width: 80%;
  height: 64px;
  border: 0.6px solid #b7abab;
  border-radius: 30px;
  border: none;
  background-color: #fff;
  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 64px;
  font-size: 16px;
  padding-left: 10px;
  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
`;
