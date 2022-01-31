import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";

const FooterAbout = () => {
  return (
    <FooterContainer>
      <FirstTextWrapper>
        <MainText
          text="lorem ipsum dolor sit amet, consectetur "
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
        <MainText
          text="adipiscing elit. Purus consectetur id faciliisi  suscipit   "
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
        <MainText
          text="adipiscing elit. Purus consectetur id faciliisi  suscipit   "
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
        <MainText
          text="sodales sollicitudin malesuada proin. "
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />

        <MainText
          text="risus ut porttitor"
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
      </FirstTextWrapper>

      <ChooseUsTextWrapper>
        <MainText
          text="Why Choose Us"
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
        <MainText
          text="Our services"
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
        <MainText
          text="Contact Us"
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
        <MainText
          text="Terms & conditions"
          fontFamily="Amiko"
          fontWeight="normal"
          fontSize="14px"
          lineHeight="29px"
        />
      </ChooseUsTextWrapper>

      <GroupedText>
        <ScheduleWrapper>
          <MainText
            text="Monday - Friday | 8:00am-10pm"
            fontFamily="Amiko"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="29px"
          />
          <MainText
            text="Saturdays | 9:00am-11pm"
            fontFamily="Amiko"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="29px"
          />
          <MainText
            text="Sundays | 8:00am-9pm"
            fontFamily="Amiko"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="29px"
          />
        </ScheduleWrapper>

        <AddressWrapper>
          <MainText
            text="3A Idowu Matins Victoria Island Lagos"
            fontFamily="Amiko"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="29px"
          />
          <MainText
            text="Call Us - 081078899008"
            fontFamily="Amiko"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="29px"
          />
          <MainText
            text="Email - info@keggo.com"
            fontFamily="Amiko"
            fontWeight="normal"
            fontSize="14px"
            lineHeight="29px"
          />
        </AddressWrapper>
      </GroupedText>
    </FooterContainer>
  );
};

export default FooterAbout;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 65px;
`;

const FirstTextWrapper = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const ChooseUsTextWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const GroupedText = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
`;

const ScheduleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
