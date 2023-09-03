import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)({
    margin: "20px 1rem 20px 1rem",
    borderRadius: 5,
    padding: "10px 20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.08)",
    background:
        "linear-gradient(74deg, rgba(0, 0, 0, 0.78) 0%, #A30A00 96.88%)",
    color: "white",
    fontSize: "15px",

    "&:active": {
        transform: "scale(0.98)",
        boxShadow: "0 2px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    },
});

export { StyledButton };
