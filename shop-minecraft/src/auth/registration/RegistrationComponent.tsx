// RegistrationComponent.tsx
import React, { useState } from "react";
import { registerWithEmail } from "../../firebase";
import {
    StyledButton,
    RegistrationContainer,
    StyledInput,
    RegistrationPaper,
    StyledLink,
    LoginTitle,
} from "./Registration.styled";
import { Typography } from "@mui/material";

const RegistrationComponent: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleRegister = () => {
        registerWithEmail(email, password)
            .then((result) => {})
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <RegistrationContainer>
            <RegistrationPaper>
                <LoginTitle>Register</LoginTitle>
                {errorMessage && (
                    <Typography color="error">{errorMessage}</Typography>
                )}

                <StyledInput
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <StyledInput
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleRegister}
                >
                    Register
                </StyledButton>

                <Typography>
                    Already have an account?
                    <StyledLink to="/login">Login here</StyledLink>
                </Typography>
            </RegistrationPaper>
        </RegistrationContainer>
    );
};

export default RegistrationComponent;
