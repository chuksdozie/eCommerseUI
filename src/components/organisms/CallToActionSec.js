import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
// import SearchBar from "../molecules/SearchBar";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import SubscribeBar from "../molecules/SubscribeBar";

const CallToActionSection = () => {
  return (
    <CallToActionSecContainer>
      <SignUpWrapper>
        <MainText
          text="Sign up for newsletter"
          fontFamily="Amiko"
          fontWeight="400"
          fontSize="24px"
          lineHeight="32.02px"
          color="#fff"
        />
        <MainText
          text="and get lastest news & update"
          fontFamily="Amiko"
          fontWeight="400"
          fontSize="14px"
          lineHeight="18.68px"
          color="#fff"
        />
        <SubscribeBar />
      </SignUpWrapper>

      <SocialMediaWrapper>
        <MainText
          text="follow us"
          fontFamily="Amiko"
          fontWeight="400"
          fontSize="14px"
          lineHeight="29px"
          color="#fff"
        />
        <SocialMediaIcon>
          <Icon>
            <AiOutlineTwitter />
          </Icon>
          <Icon>
            <ImFacebook />
          </Icon>
          <Icon>
            <AiOutlineInstagram />
          </Icon>
        </SocialMediaIcon>
      </SocialMediaWrapper>
    </CallToActionSecContainer>
  );
};

export default CallToActionSection;

const CallToActionSecContainer = styled.div`
  width: 100%;
  padding: 80px 100px;
  background: linear-gradient(91.62deg, #ef5e0d 26.96%, #f03800 85.311%);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SignUpWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  width: 30%;
`;
const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  column-gap: 20px;
`;

const Icon = styled.div`
  display: flex;
  background-color: #bf420a;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #8f3208;
    color: #facbb6;
  }
`;
