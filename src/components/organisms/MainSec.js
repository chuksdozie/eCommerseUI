import React from "react";
import styled from "styled-components";
import SideBarCategory from "./SideBarCategory";
import Pagination from "../atoms/Pagination";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PopularCartSection from "./PopularCartSection";

const MainSec = () => {
  return (
    <Container>
      <MainWrapper>
        <LeftWrapper>
          <SideBarCategory />
        </LeftWrapper>
        <RightWrapper>
          <Header />
          <HeroSection />
        </RightWrapper>
      </MainWrapper>
      <Pagination />
      <PopularCartSection />
    </Container>
  );
};

export default MainSec;

const Container = styled.div``;

const MainWrapper = styled.div`
  display: flex;
  column-gap: 56px;
`;

const LeftWrapper = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
`;

const RightWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 63px;
`;
