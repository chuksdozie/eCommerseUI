import React from "react";
import styled from "styled-components";

const MainText = (props) => {
  const {
    text,
    color,
    weight,
    fontSize,
    fontFamily,
    fontWeight,
    borderTop,
    paddingLeft,
    textDecorationLine,
    paddingBottom,
  } = props;

  return (
    <CategoryText
      color={color}
      weight={weight}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      borderTop={borderTop}
      padding-Left={paddingLeft}
      text-decoration-line={textDecorationLine}
      padding-bottom={paddingBottom}
    >
      {text}
    </CategoryText>
  );
};

export default MainText;

const CategoryText = styled.text`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  width: ${(props) => props.width};
  border-top: ${(props) => props.borderTop};
  padding-left: ${(props) => props.paddingLeft};
  text-decoration-line: ${(props) => props.textDecorationLine};
  padding-bottom: ${(props) => props.paddingBottom};
`;
