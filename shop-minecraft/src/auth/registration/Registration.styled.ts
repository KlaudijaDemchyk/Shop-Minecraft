import { Button, TextField, Box, styled, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)({
    margin: "1rem 0",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgb(162.56, 9.75, 0) 96.88%)",
    borderRadius: 5,
});

const RegistrationContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#1A1A1A",
});

const StyledInput = styled(TextField)({
    margin: "0.5rem 0",
});

const RegistrationPaper = styled(Paper)({
    padding: "2rem",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
});

const LoginTitle = styled("div")({
    fontWeight: "bold",
    fontSize: "1.25rem",
});

const StyledLink = styled(Link)({
    color: "gray",
    "&:hover": {
        color: "red",
    },
});

export { StyledButton, RegistrationContainer, StyledInput, RegistrationPaper,StyledLink, LoginTitle};
