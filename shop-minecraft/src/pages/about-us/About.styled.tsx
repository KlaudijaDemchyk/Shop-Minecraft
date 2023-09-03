import { Button, Container, styled } from "@mui/material";

const StyledContainer = styled(Container)({
    backgroundImage: 'url("./AboutUs.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundCcolor: "#1a1a1a",
    minWidth: "100%",
    minHeight: "100vh",
    padding: "5rem 0",
});

const StyledButton = styled(Button)({
    marginTop: "2rem",
    marginLeft: "1rem",
    background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgb(162.56, 9.75, 0) 96.88%)",
    borderRadius: 5,
});

export { StyledContainer, StyledButton };
