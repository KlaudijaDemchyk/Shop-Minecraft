import { styled } from "@mui/material/styles";
import { Box, AppBar, Button, Typography } from "@mui/material";

const StyledBox = styled(Box)({
    height: "100vh",
    backgroundImage: 'url("./BackgroundHeader.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
});

const StyledAppBar = styled(AppBar)({
    background: "#333",
    color: "#fff",
});

const StyledContent = styled(Box)({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "5rem",
});

const Logo = styled("img")({
    paddingRight: 10,
});

const StyledButton = styled(Button)({
    marginLeft: "1rem",
    background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.78) 0%, rgb(162.56, 9.75, 0) 96.88%)",
    borderRadius: 5,
});

const Title = styled(Typography)({
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)",
    fontFamily: "Gurajada",
    fontSize: 128,
    fontStyle: "normal",
    fontWeight: 400,
});

const StyledHell = styled(Title)({
    color: "#fff",
    display: "inline",
});

const StyledWorld = styled(Title)({
    background:
        "linear-gradient(66deg, rgba(255, 255, 255, 0.67) 0%, rgba(171, 33, 33, 0.98) 0%, rgba(171, 34, 34, 0.98) 0.01%, rgba(165, 16, 16, 0.53) 48.44%, rgba(193, 35, 35, 0.53) 94.94%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline",
});

const Wrap = styled(Box)({
    width: 534,
    height: 59,
    marginBottom: 50,
});

const Discription = styled(Typography)({
    color: "#F3E6E6",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.07)",
    fontFamily: "DM Sans",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
});

export {
    StyledBox,
    StyledAppBar,
    StyledContent,
    Logo,
    Title,
    StyledHell,
    StyledWorld,
    Discription,
    Wrap,
    StyledButton,
};
