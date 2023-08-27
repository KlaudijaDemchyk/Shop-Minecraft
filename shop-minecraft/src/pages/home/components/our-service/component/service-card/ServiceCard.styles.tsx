import { Box, Button } from "@mui/material";
import styled from "@mui/material/styles/styled";

const ProductCard = styled(Box)({
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    backgroundColor: "transparent",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)",
    color: "white",
    transition: "all 0.2s ease-in-out",
    fontSize: "18px",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 4px 6px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.18)",
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
    background:
        "linear-gradient(74deg, rgba(0, 0, 0, 0.78) 0%, #A30A00 96.88%)",
    color: "white",
    fontSize: "20px",
});

const CardsContainer = styled(Box)({
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
});

export { ProductCard, ProductImage, BuyButton, CardsContainer };
