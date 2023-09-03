import React from "react";
import { Badge, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import { User } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { useCart } from "../../../../../context/CartContext";
import {
    ActiveMenuLink,
    CartLinkContainer,
    MenuContainer,
    StyledButton,
    StyledLink,
    StyledMenuLink,
    StyledShoppingCartIcon,
    UserContainer,
} from "./Navigation.styled";

interface NavigationProps {
    user: User | null;
    handleUserMenuClick: (event: React.MouseEvent<HTMLElement>) => void;
    handleLogout: () => void;
    handleJoinUsClick: () => void;
    anchorEl: null | HTMLElement;
    handleUserMenuClose: () => void;
}

const Navigation: React.FC<NavigationProps> = (props) => {
    const { itemsCount } = useCart();
    const location = useLocation();

    return (
        <MenuContainer>
            <StyledLink to="/">
                {location.pathname === "/" ? (
                    <ActiveMenuLink variant="body1">Home</ActiveMenuLink>
                ) : (
                    <StyledMenuLink variant="body1">Home</StyledMenuLink>
                )}
            </StyledLink>

            <StyledLink to="/about">
                <StyledMenuLink variant="body1">About Us</StyledMenuLink>
            </StyledLink>

            <StyledLink to="/cart">
                <CartLinkContainer variant="body1">
                    Cart
                    <Badge badgeContent={itemsCount} color="error">
                        <StyledShoppingCartIcon />
                    </Badge>
                </CartLinkContainer>
            </StyledLink>

            {props.user ? (
                <div>
                    <UserContainer>
                        <Typography variant="body1">
                            Welcome, {props.user.displayName}
                        </Typography>
                        <IconButton
                            color="inherit"
                            onClick={props.handleUserMenuClick}
                        >
                            <AccountCircle />
                        </IconButton>
                    </UserContainer>
                    <Menu
                        anchorEl={props.anchorEl}
                        open={Boolean(props.anchorEl)}
                        onClose={props.handleUserMenuClose}
                    >
                        <MenuItem onClick={props.handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
            ) : (
                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={props.handleJoinUsClick}
                >
                    Join Us
                </StyledButton>
            )}
        </MenuContainer>
    );
};

export default Navigation;
