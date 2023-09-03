import React from "react";
import {
    Typography,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Grid,
    ListItemAvatar,
    Avatar,
} from "@mui/material";
import {
    StyledContainer,
    StyledTypography,
    StyledPaper,
    ContinueShoppingButtonBase,
    SignUpButton,
    ButtonsGrid,
    StyledLink,
} from "./CartPage.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/CartContext";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const CartPage: React.FC = () => {
    useDocumentTitle("Cart");

    const { cartItems, removeItemFromCart } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <StyledContainer maxWidth="md">
            <StyledTypography variant="h4" align="center" gutterBottom>
                Your Cart
            </StyledTypography>

            <StyledPaper>
                {cartItems.length > 0 ? (
                    cartItems.map((item, idx) => (
                        <ListItem
                            key={idx}
                            divider={idx !== cartItems.length - 1}
                        >
                            <ListItemAvatar>
                                <Avatar variant="square" src={item.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={`$${item.price}`}
                            />

                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    color="secondary"
                                    onClick={() =>
                                        removeItemFromCart(item.name)
                                    }
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                ) : (
                    <Typography
                        align="center"
                        variant="h6"
                        color="textSecondary"
                    >
                        Your cart is empty.
                    </Typography>
                )}
            </StyledPaper>

            <StyledTypography align="center" variant="h6">
                Total: ${total}
            </StyledTypography>

            <ButtonsGrid container spacing={2} justifyContent="center">
                <Grid item>
                    <StyledLink to="/">
                        <ContinueShoppingButtonBase variant="outlined">
                            Continue Shopping
                        </ContinueShoppingButtonBase>
                    </StyledLink>
                </Grid>
                <Grid item>
                    <StyledLink to="/payment">
                        <SignUpButton
                            variant="contained"
                            disabled={cartItems.length === 0}
                        >
                            Buy
                        </SignUpButton>
                    </StyledLink>
                </Grid>
            </ButtonsGrid>
        </StyledContainer>
    );
};

export default CartPage;
