import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const MenuContainer = styled(Box)({
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
});

const StyledButton = styled(Button)({
    marginLeft: "1rem",
    background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgb(162.56, 9.75, 0) 96.88%)",
    borderRadius: 5,
});

const StyledMenuLink = styled(Typography)({
    marginRight: "1.5rem",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
});

const CartLinkContainer = styled(StyledMenuLink)({
    display: "inline-flex",
    alignItems: "center",
});

const StyledShoppingCartIcon = styled(ShoppingCartIcon)({
    marginLeft: "5px",
});

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none; /* Remove underline */

    &:hover {
        color: red;
    }
`;

const UserContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
});

const ActiveMenuLink = styled(StyledMenuLink)({
    color: "red",
});

export {
    MenuContainer,
    StyledButton,
    StyledMenuLink,
    CartLinkContainer,
    StyledShoppingCartIcon,
    StyledLink,
    UserContainer,
    ActiveMenuLink,
};
