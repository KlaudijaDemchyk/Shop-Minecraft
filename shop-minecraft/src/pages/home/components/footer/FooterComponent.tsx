import React from "react";
import {
    BoxStyled,
    FooterLine,
    IconButtonStyled,
    Logo,
    Name,
    StyledFooter,
    Wrapper,
} from "./Footer.styled";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import QuizIcon from "@mui/icons-material/Quiz";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { StyledMenuLink } from "../header/Header.styled";

const FooterComponent: React.FC = () => {
    return (
        <StyledFooter>
            <FooterLine />
            <Wrapper pl={10}>
                <Name variant="h6">
                    <Logo alt="Logo" src="./Logo.svg" />
                    Hell Word.
                </Name>
                <Wrapper>
                    <BoxStyled>
                        <FmdGoodIcon />
                        <Typography pl={1}>Dhaka, Bangladesh</Typography>
                    </BoxStyled>
                    <BoxStyled pl={2}>
                        <LocalPhoneIcon />
                        <Typography pl={1}>0943833399</Typography>
                    </BoxStyled>
                    <BoxStyled pl={2}>
                        <QuizIcon />
                        <Typography pl={1}>support@zone.com</Typography>
                    </BoxStyled>
                </Wrapper>
                <Wrapper pr={10}>
                    <BoxStyled pl={2}>
                        <IconButtonStyled>
                            <FacebookIcon />
                        </IconButtonStyled>
                    </BoxStyled>
                    <BoxStyled pl={2}>
                        <IconButtonStyled>
                            <TwitterIcon />
                        </IconButtonStyled>
                    </BoxStyled>
                    <BoxStyled pl={2}>
                        <IconButtonStyled>
                            <InstagramIcon />
                        </IconButtonStyled>
                    </BoxStyled>
                    <BoxStyled pl={2}>
                        <IconButtonStyled>
                            <PinterestIcon />
                        </IconButtonStyled>
                    </BoxStyled>
                </Wrapper>
            </Wrapper>
            <Wrapper pl={10} pr={10} mt={2} mb={4}>
                <BoxStyled>
                    <StyledMenuLink variant="body1">Service</StyledMenuLink>
                </BoxStyled>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1">Order</StyledMenuLink>
                </BoxStyled>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1">Management</StyledMenuLink>
                </BoxStyled>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1">
                        Social Assistant
                    </StyledMenuLink>
                </BoxStyled>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1">
                        Crypto Platform
                    </StyledMenuLink>
                </BoxStyled>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1">
                        Analyzer of the
                    </StyledMenuLink>
                </BoxStyled>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1">News</StyledMenuLink>
                </BoxStyled>
            </Wrapper>
            <FooterLine mb={2} />
            <Wrapper>
                <Typography variant="h6">
                    © 2023 Hell.World - All rights reserved.{" "}
                </Typography>
                <BoxStyled pl={2}>
                    <StyledMenuLink variant="body1"> Privacy</StyledMenuLink>
                    <StyledMenuLink variant="body1"> Security</StyledMenuLink>
                    <StyledMenuLink variant="body1"> Terms</StyledMenuLink>
                </BoxStyled>
            </Wrapper>
        </StyledFooter>
    );
};

export default FooterComponent;
