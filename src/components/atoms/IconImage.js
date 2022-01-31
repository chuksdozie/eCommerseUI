import React from "react";
import styled from "styled-components";

const IconImage = (props) => {
  const { icon, alt, height, width } = props;
  return <Photo src={icon} alt={alt} height={height} width={width} />;
};

export default IconImage;

const Photo = styled.img`
  /* width: 24px;
  height: 24px; */
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "20px"};
`;
