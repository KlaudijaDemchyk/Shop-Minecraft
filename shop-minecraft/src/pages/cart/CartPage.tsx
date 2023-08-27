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

const CartPage: React.FC = () => {
    const { cartItems, removeItemFromCart } = useCart();

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

            <ButtonsGrid container spacing={2} justifyContent="center">
                <Grid item>
                    <StyledLink to="/">
                        <ContinueShoppingButtonBase variant="outlined">
                            Continue Shopping
                        </ContinueShoppingButtonBase>
                    </StyledLink>
                </Grid>
                <Grid item>
                    <SignUpButton variant="contained">Buy</SignUpButton>
                </Grid>
            </ButtonsGrid>
        </StyledContainer>
    );
};

export default CartPage;
