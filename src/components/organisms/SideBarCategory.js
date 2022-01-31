import React from "react";
import styled from "styled-components";
import SideBarCategoryItem from "../molecules/SideBarCategoryItem";
import WomanIcon from "../../resources/icons/icons8-woman.png";
import ManIcon from "../../resources/icons/icons8-man.png";
import KidsIcon from "../../resources/icons/icons8-friend.png";
import AccessoryIcon from "../../resources/icons/icons8-glasses.png";
import ClothingIcon from "../../resources/icons/icons8-shirt.png";
import ShoeIcon from "../../resources/icons/icons8-running-shoes.png";
import WatchIcon from "../../resources/icons/icons8-watch.png";
import JewelryIcon from "../../resources/icons/icons8-jewelry.png";
import HealthIcon from "../../resources/icons/icons8-hydrotherapy.png";
import FootballIcon from "../../resources/icons/icons8-football.png";

import { CgMathPlus } from "react-icons/cg";
import MainText from "../atoms/MainText";

const data = [
  {
    id: 1,
    itemIcon: WomanIcon,
    itemText: "Woman's",
    itemAlt: "woman-icon",
  },
  {
    id: 2,
    itemIcon: ManIcon,
    itemText: "Man's",
    itemAlt: "man-icon",
  },
  {
    id: 3,
    itemIcon: KidsIcon,
    itemText: "Kid's",
    itemAlt: "woman-icon",
  },
  {
    id: 4,
    itemIcon: AccessoryIcon,
    itemText: "Accessories",
    itemAlt: "a pair of glasses icon",
  },
  {
    id: 5,
    itemIcon: ClothingIcon,
    itemText: "Clothing",
    itemAlt: "a shirt icon",
  },
  {
    id: 6,
    itemIcon: ShoeIcon,
    itemText: "Shoes",
    itemAlt: "a shoe icon",
  },
  {
    id: 7,
    itemIcon: WatchIcon,
    itemText: "Woman's",
    itemAlt: "woman-icon",
  },

  {
    id: 8,
    itemIcon: JewelryIcon,
    itemText: "Jewellery",
    itemAlt: "necklace on a neck stand icon",
  },
  {
    id: 9,
    itemIcon: HealthIcon,
    itemText: "Health & Beauty",
    itemAlt: "a bathtub icon",
  },
  {
    id: 10,
    itemIcon: FootballIcon,
    itemText: "Sports",
    itemAlt: "a football Icon",
  },
];
const SideBarCategory = () => {
  return (
    <SideBarContainer>
      {data.map((i, k) => (
        <SideBarCategoryItem
          key={k}
          mIcon={i.itemIcon}
          mText={i.itemText}
          mAlt={i.itemAlt}
          lHeight={"12px"}
          lWidth={"12px"}
        />
      ))}
      <MoreCartegoryWrapper>
        <MainText
          text="More Categories"
          color="#d6336c"
          fontFamily="Montserrat"
          fontSize="14px"
          fontWeight="600"
        />
        <IconPlusWrapper>
          <CgMathPlus />
        </IconPlusWrapper>
      </MoreCartegoryWrapper>
    </SideBarContainer>
  );
};

export default SideBarCategory;

const SideBarContainer = styled.div`
  width: 300px;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px;
`;

const MoreCartegoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  row-gap: 10px;
  border-top: 1px solid #ccc;
`;

const IconPlusWrapper = styled.div`
  color: #d6336c;
`;
