import React from "react";
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import { StyledButton, StyledContainer } from "./About.styled";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const AboutUs: React.FC = () => {
    useDocumentTitle("About Us");

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <StyledContainer>
            <Paper elevation={3} style={{ padding: "2rem" }}>
                <Typography variant="h4" gutterBottom>
                    Who Are We?
                </Typography>
                <Typography paragraph>
                    We are a team of Minecraft enthusiasts, bound together by
                    our shared passion for creating and trading unique in-game
                    items and resources. Starting as a small community back in
                    2020, we have since grown into a prominent online store,
                    delivering the finest goods to players worldwide.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    Our Mission
                </Typography>
                <Typography paragraph>
                    Our goals are simple: to provide the highest standard of
                    quality in both our products and services to our cherished
                    community. We believe that every Minecraft player deserves
                    the best, and our team tirelessly works towards bringing you
                    the most creative and innovative products.
                </Typography>

                <Typography variant="h4" gutterBottom>
                    Why Choose Us?
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Uniqueness"
                            secondary="Our products are crafted with love and inspiration, making them perfect for every kind of player."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Quality Assurance"
                            secondary="We meticulously check each product before it hits the market, ensuring top-notch quality standards."
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Community"
                            secondary="We value our customers and consistently engage with them to enhance our services and products."
                        />
                    </ListItem>
                </List>
                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleGoBack}
                >
                    Go back to shopping
                </StyledButton>
            </Paper>
        </StyledContainer>
    );
};

export default AboutUs;
