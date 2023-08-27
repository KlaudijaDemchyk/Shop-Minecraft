import React, { useEffect, useState } from "react";
import {
    Badge,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import {
    StyledBox,
    StyledAppBar,
    StyledContent,
    Logo,
    MenuContainer,
    StyledButton,
    StyledMenuLink,
    Title,
    StyledHell,
    StyledWorld,
    Discription,
    Wrap,
    CartLinkContainer,
    StyledShoppingCartIcon,
    StyledLink,
    UserContainer,
    ActiveMenuLink,
} from "./Header.styled";
import { useCart } from "../../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../../firebase";
import { User } from "firebase/auth";
import { useLocation } from "react-router-dom";

const HeaderComponent: React.FC = () => {
    const { itemsCount } = useCart();
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleJoinUsClick = () => {
        navigate("/register");
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleUserMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <StyledBox>
            <StyledAppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <Logo alt="Logo" src="./Logo.svg" />
                        Hell Word.
                    </Typography>

                    <MenuContainer>
                        <StyledLink to="/">
                            {location.pathname === "/" ? (
                                <ActiveMenuLink variant="body1">
                                    Home
                                </ActiveMenuLink>
                            ) : (
                                <StyledMenuLink variant="body1">
                                    Home
                                </StyledMenuLink>
                            )}
                        </StyledLink>

                        <StyledLink to="/about">
                            <StyledMenuLink variant="body1">
                                About Us
                            </StyledMenuLink>
                        </StyledLink>
                        <StyledLink to="/cart">
                            <CartLinkContainer variant="body1">
                                Cart
                                <Badge badgeContent={itemsCount} color="error">
                                    <StyledShoppingCartIcon />
                                </Badge>
                            </CartLinkContainer>
                        </StyledLink>

                        {user ? (
                            <div>
                                <UserContainer>
                                    <Typography variant="body1">
                                        Welcome, {user.displayName}
                                    </Typography>
                                    <IconButton
                                        color="inherit"
                                        onClick={handleUserMenuClick}
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </UserContainer>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={handleUserMenuClose}
                                >
                                    <MenuItem onClick={handleLogout}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        ) : (
                            <StyledButton
                                variant="contained"
                                color="primary"
                                onClick={handleJoinUsClick}
                            >
                                Join Us
                            </StyledButton>
                        )}
                    </MenuContainer>
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
                        Go to Minecraft
                    </StyledButton>
                </Wrap>
            </StyledContent>
        </StyledBox>
    );
};

export default HeaderComponent;
