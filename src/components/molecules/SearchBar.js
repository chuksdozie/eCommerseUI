import React from "react";
import Input from "../atoms/Input";
import styled from "styled-components";
import Button from "../atoms/Button";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = (props) => {
  return (
    <SearchBarContainer>
      <IconButton>
        <AiOutlineSearch />
      </IconButton>
      <Input />
      <Button buttonText="Search" margin={"12px"} />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  height: 64px;
  border: 0.6px solid #b7abab;
  background-color: green;
  border-radius: 30px;
  background-color: #fff;
  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 29px;
  cursor: pointer;
`;
