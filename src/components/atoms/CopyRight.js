import React from "react";
import styled from "styled-components";
import MainText from "./MainText";

const CopyRight = () => {
  return (
    <Container>
      {" "}
      <MainText
        text="Copyrights &copy;2020 Ezone. All rights reserved"
        fontSize="12px"
        fontWeight="400"
        color="#3c3c3c"
        fontFamily="Amiko"
      />
    </Container>
  );
};

export default CopyRight;

const Container = styled.div`
  display: flex;
  padding: 40px;
  justify-content: center;
  align-items: center;
`;
