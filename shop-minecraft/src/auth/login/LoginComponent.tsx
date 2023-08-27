import React, { useState } from "react";
import { signInWithEmail, signInWithGoogle } from "../../firebase";
import {
    LoginPageContainer,
    LoginPaper,
    LoginTitle,
    StyledButton,
    StyledLink,
} from "./Login.styled";
import { TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginComponent: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);
    const navigate = useNavigate();

    const handleEmailSignIn = () => {
        signInWithEmail(email, password)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    return (
        <LoginPageContainer>
            <LoginPaper elevation={3}>
                <LoginTitle>Sign In</LoginTitle>

                {errorMessage && (
                    <Typography color="error">{errorMessage}</Typography>
                )}

                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />

                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleEmailSignIn}
                >
                    Sign In
                </StyledButton>

                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleGoogleSignIn}
                    startIcon={
                        <img src="./Googl.png" alt="Google logo" width="20" />
                    }
                >
                    Sign in with Google
                </StyledButton>

                <Typography>
                    Don't have an account?
                    <StyledLink to="/register"> Register here</StyledLink>
                </Typography>
            </LoginPaper>
        </LoginPageContainer>
    );
};

export default LoginComponent;
