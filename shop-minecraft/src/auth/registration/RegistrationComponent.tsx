import React from "react";
import { useAuthFacade } from "./authFacade";
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
    const {
        email,
        setEmail,
        password,
        setPassword,
        errorMessage,
        handleRegister,
    } = useAuthFacade();

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
