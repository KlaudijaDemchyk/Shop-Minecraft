import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { StyledLink } from "../home/components/header/components/Navigation.styled";
import { useValidation } from "./Paymaent.validation";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./Payment.styled";

const PaymentPage: React.FC = () => {
    useDocumentTitle("Payment");

    const [cardNumber, setCardNumber] = useState<string>("");
    const [cardName, setCardName] = useState<string>("");
    const [expiryDate, setExpiryDate] = useState<string>("");
    const [cvv, setCvv] = useState<string>("");

    const {
        cardNumberError,
        cardNameError,
        expiryDateError,
        cvvError,
        validateCardNumber,
        validateCardName,
        validateExpiryDate,
        validateCVV,
    } = useValidation();

    const handlePayment = () => {
        validateCardNumber(cardNumber);
        validateCardName(cardName);
        validateExpiryDate(expiryDate);
        validateCVV(cvv);

        if (cardNumberError || cardNameError || expiryDateError || cvvError) {
            alert("Please correct the errors.");
            return;
        }

        alert("Payment submitted!");
    };

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom mt={5}>
                Payment Details
            </Typography>
            <TextField
                error={!!cardNumberError}
                helperText={cardNumberError}
                fullWidth
                margin="normal"
                label="Card Number"
                value={cardNumber}
                onChange={(e) => {
                    setCardNumber(e.target.value);
                    validateCardNumber(e.target.value);
                }}
            />
            <TextField
                error={!!cardNameError}
                helperText={cardNameError}
                fullWidth
                margin="normal"
                label="Name on Card"
                value={cardName}
                onChange={(e) => {
                    setCardName(e.target.value);
                    validateCardName(e.target.value);
                }}
            />
            <TextField
                error={!!expiryDateError}
                helperText={expiryDateError}
                fullWidth
                margin="normal"
                label="Expiry Date"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={(e) => {
                    setExpiryDate(e.target.value);
                    validateExpiryDate(e.target.value);
                }}
            />
            <TextField
                error={!!cvvError}
                helperText={cvvError}
                fullWidth
                margin="normal"
                label="CVV"
                type="password"
                value={cvv}
                onChange={(e) => {
                    setCvv(e.target.value);
                    validateCVV(e.target.value);
                }}
            />{" "}
            <StyledLink to="/payment">
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handlePayment}
                >
                    Pay Now
                </Button>
                <StyledButton onClick={handleGoBack}>Back</StyledButton>
            </StyledLink>
        </Container>
    );
};

export default PaymentPage;
