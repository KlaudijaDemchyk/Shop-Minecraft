import React from "react";
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";
import { StyledBox } from "./Container.styled";
import OurServiceComponent from "../our-service/OurServiceComponent";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <StyledBox>
            <HeaderComponent />
            <OurServiceComponent />
            <FooterComponent />
        </StyledBox>
    );
};

export default Container;
