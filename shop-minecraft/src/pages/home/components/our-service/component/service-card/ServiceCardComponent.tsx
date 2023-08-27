import React, { useState } from "react";
import { ServiceCardProps } from "../types";
import {
    BuyButton,
    CardsContainer,
    ProductCard,
    ProductImage,
} from "./ServiceCard.styles";
import { Box, Snackbar } from "@mui/material";
import { useCart } from "../../../../../../context/CartContext";

const ServiceCardComponent: React.FC<ServiceCardProps> = ({
    selectedCategory,
    categories,
}) => {
    const { addItemToCart } = useCart();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const selectedProducts =
        categories.find((cat) => cat.name === selectedCategory)?.products || [];

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleBuyNowClick = (product: {
        name: string;
        image: string;
        price: number;
    }) => {
        setOpenSnackbar(true);
        addItemToCart(product);
    };

    return (
        <>
            <CardsContainer>
                {selectedProducts.map((product) => (
                    <ProductCard key={product.name}>
                        <ProductImage src={product.image} alt={product.name} />
                        <Box mb={2} mt={2}>
                            {product.name}
                        </Box>
                        <Box mb={2}>{product.price} $</Box>
                        <BuyButton
                            onClick={() => {
                                handleBuyNowClick(product);
                            }}
                        >
                            Buy Now
                        </BuyButton>
                    </ProductCard>
                ))}
            </CardsContainer>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={openSnackbar}
                onClose={handleCloseSnackbar}
                message="Item added to cart!"
                autoHideDuration={3000}
            />
        </>
    );
};

export default ServiceCardComponent;
