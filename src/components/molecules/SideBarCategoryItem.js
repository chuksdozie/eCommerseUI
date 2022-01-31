import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import IconImage from "../atoms/IconImage";
import RightArrrowIcon from "../../resources/icons/icons8-right-arrow.png";

const SideBarCategoryItem = (props) => {
  const { mIcon, mAlt, mText, mHeight, mWidth } = props;
  return (
    <SideBarItemContainer>
      <CategoryWrapper>
        <IconImage icon={mIcon} alt={mAlt} height={mHeight} width={mWidth} />
        <MainText
          text={mText}
          fontSize={"12px"}
          fontWeight={"600"}
          color={"#3e3e3e"}
          fontFamily={"Montserrat"}
        />
      </CategoryWrapper>
      <IconImage
        icon={RightArrrowIcon}
        width={"8px"}
        height={"8px"}
        alt={"right-arrow-icon"}
      />
    </SideBarItemContainer>
  );
};

export default SideBarCategoryItem;

const SideBarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 0 15px;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  cursor: pointer;
`;
