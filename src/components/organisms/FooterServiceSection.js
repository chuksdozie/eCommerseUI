import React from "react";
import styled from "styled-components";
import FooterServiceItem from "../molecules/FooterServiceItem";
import DeliveryIcon from "../../resources/icons/icons8-fast-delivery.png";
import GuaranteeIcon from "../../resources/icons/icons8-guarantee.png";
import SupportIcon from "../../resources/icons/icons8-support.png";

const serviceData = [
  {
    id: 1,
    serviceIconImg: DeliveryIcon,
    footerHeadText: "Free Delivery",
    footerPText: "Phasellus blaandit massa enim elit of passage ",
    footerPText2: "varius nunc",
    iconAlt: "a delivery truck icon",
  },
  {
    id: 1,
    serviceIconImg: GuaranteeIcon,
    footerHeadText: "30 Days Returns Guarantee",
    footerPText: "Phasellus blaandit massa enim elit of passage ",
    footerPText2: "varius nunc",
    iconAlt: "guarantee icon",
  },
  {
    id: 1,
    serviceIconImg: SupportIcon,
    footerHeadText: "27/4 Online Support",
    footerPText: "Phasellus blaandit massa enim elit of passage ",
    footerPText2: "varius nunc",
    iconAlt: "headphone icon",
  },
];

const FooterServiceSection = () => {
  return (
    <FooterSectionContainer>
      {serviceData.map((i, k) => (
        <FooterServiceItem
          key={k}
          fFooterIcon={i.serviceIconImg}
          footerH1Text={i.footerHeadText}
          footerDesText2={i.footerPText2}
          footerDesText={i.footerPText}
          fAlt={i.iconAlt}
          fWidth={"35px"}
          fHeight={"35px"}
        />
      ))}
    </FooterSectionContainer>
  );
};

export default FooterServiceSection;

const FooterSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
`;
