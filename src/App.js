import React from "react";
import styled from "styled-components";
import BestSellerSection from "./components/organisms/BestSellerSection";
import MainSec from "./components/organisms/MainSec";
import SecondarySec from "./components/organisms/SecondarySec";

const App = () => {
  return (
    <div className="App">
      <Container>
        <MainSec />
        <BestSellerSection sectionName="Best Seller" />
        <SecondarySec />
      </Container>

      {/* <MainText text="hello" color={"red"} weight={"700"} fontSize={"34px"} /> */}
    </div>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 50px auto;
  padding: 40px 46px;
`;
