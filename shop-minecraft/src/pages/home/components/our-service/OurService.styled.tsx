import { Box, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";

const Wrapper = styled(Box)({
    textAlign: "center",
    padding: 20,
    backgroundColor: "#1A1A1A",
});

const Title = styled(Typography)({
    color: "white",
    marginTop: 20,
    marginBottom: 50,
});

const ServiceMenu = styled(Box)({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
});

const ImageWrapper = styled(Box)<{ active: boolean }>((props) => ({
    opacity: props.active ? 1 : 0.5,
    cursor: "pointer",
    textAlign: "center",
    "& img": {
        maxWidth: "100%",
        display: "block",
    },
}));

const CategoryLink = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem",
    cursor: "pointer",
    color: "white",
    "& span": {
        marginLeft: "0.5rem",
    },
    "&:hover": {
        color: "red",
        textDecoration: "none",
    },
});

export { ServiceMenu, Wrapper, Title, ImageWrapper, CategoryLink };
