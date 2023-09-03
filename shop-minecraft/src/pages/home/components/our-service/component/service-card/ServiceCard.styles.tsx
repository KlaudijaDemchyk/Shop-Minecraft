import { Box, Button } from "@mui/material";
import styled from "@mui/material/styles/styled";

const ProductCard = styled(Box)({
    border: "1px solid black",
    padding: "10px",
    margin: "20px",
    backgroundColor: "transparent",
    boxShadow: "0 6px 8px rgba(0,0,0,0.2), 0 3px 6px rgba(0,0,0,0.15)",
    color: "white",
    transition: "all 0.2s ease-in-out",
    fontSize: "18px",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 12px rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.2)",
    },
});

const ProductImage = styled("img")({
    width: "312px",
    height: "336px",
    marginBottom: "10px",
    display: "block",
    margin: "0 auto",
});

const BuyButton = styled(Button)({
    margin: "20px 1rem 20px 1rem",
    borderRadius: 5,
    padding: "10px 20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.08)",
    background:
        "linear-gradient(74deg, rgba(0, 0, 0, 0.78) 0%, #A30A00 96.88%)",
    color: "white",
    fontSize: "20px",

    "&:active": {
        transform: "scale(0.98)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    },
});

const CardsContainer = styled(Box)({
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
});

export { ProductCard, ProductImage, BuyButton, CardsContainer };
