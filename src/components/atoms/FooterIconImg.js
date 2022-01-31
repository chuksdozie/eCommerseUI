import React from "react";
import styled from "styled-components";

const FooterIconImg = (props) => {
  const { footerIcon, alt, height, width } = props;
  return <Photo src={footerIcon} alt={alt} height={height} width={width} />;
};

export default FooterIconImg;

const Photo = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
