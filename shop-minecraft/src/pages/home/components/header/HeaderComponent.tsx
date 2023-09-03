import React from "react";
import { Toolbar, Typography } from "@mui/material";
import {
    StyledBox,
    StyledAppBar,
    StyledContent,
    Logo,
    StyledButton,
    Title,
    StyledHell,
    StyledWorld,
    Discription,
    Wrap,
} from "./Header.styled";
import Navigation from "./components/Navigation";
import { useHeaderFacade } from "./headerFacade";

const HeaderComponent: React.FC = () => {
    const {
        user,
        handleJoinUsClick,
        handleUserMenuClick,
        handleUserMenuClose,
        handleLogout,
        anchorEl,
    } = useHeaderFacade();

    return (
        <StyledBox>
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <Logo alt="Logo" src="./Logo.svg" />
                        Hell Word.
                    </Typography>

                    <Navigation
                        user={user}
                        handleUserMenuClick={handleUserMenuClick}
                        handleLogout={handleLogout}
                        handleJoinUsClick={handleJoinUsClick}
                        anchorEl={anchorEl}
                        handleUserMenuClose={handleUserMenuClose}
                    />
                </Toolbar>
            </StyledAppBar>

            <StyledContent>
                <Title gutterBottom>
                    <StyledHell>Hell</StyledHell>{" "}
                    <StyledWorld>World</StyledWorld>
                </Title>
                <Wrap>
                    <Discription mb={2}>
                        We have over 15 year experience in business consulting
                        arena and artificial intelligence.
                    </Discription>
                    <StyledButton variant="contained" color="primary">
                        Contact Us
                    </StyledButton>
                </Wrap>
            </StyledContent>
        </StyledBox>
    );
};

export default HeaderComponent;
