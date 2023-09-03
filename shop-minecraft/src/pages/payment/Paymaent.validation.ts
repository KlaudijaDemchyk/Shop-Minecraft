import { useState } from "react";

export const useValidation = () => {
    const [cardNumberError, setCardNumberError] = useState<string | null>(null);
    const [cardNameError, setCardNameError] = useState<string | null>(null);
    const [expiryDateError, setExpiryDateError] = useState<string | null>(null);
    const [cvvError, setCvvError] = useState<string | null>(null);

    const validateCardNumber = (cardNumber: string) => {
        if (cardNumber.length !== 16) {
            setCardNumberError('Enter a valid card number.');
        } else {
            setCardNumberError(null);
        }
    };

    const validateCardName = (cardName: string) => {
        if (cardName.trim() === '') {
            setCardNameError('Enter the name on card.');
        } else {
            setCardNameError(null);
        }
    };

    const validateExpiryDate = (expiryDate: string) => {
        const expiryPattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (!expiryPattern.test(expiryDate)) {
            setExpiryDateError('Enter a valid expiry date in MM/YY format.');
        } else {
            setExpiryDateError(null);
        }
    };

    const validateCVV = (cvv: string) => {
        if (cvv.length !== 3) {
            setCvvError('Enter a valid CVV.');
        } else {
            setCvvError(null);
        }
    };

    return {
        cardNumberError,
        cardNameError,
        expiryDateError,
        cvvError,
        validateCardNumber,
        validateCardName,
        validateExpiryDate,
        validateCVV
    };
};
