import {
    Container,
    Typography,
    Paper,
    Button,
    Grid,
    styled
} from "@mui/material";
import { Link } from "react-router-dom";

 const StyledContainer = styled(Container)`
    background-color: #1A1A1A;
    min-height: 100vh;
    padding: 2rem 0;
`;
 const StyledTypography = styled(Typography)`
    color: white;
`;

 const StyledPaper = styled(Paper)`
    padding: 1rem;
    background-color: white;
    margin-bottom: 1rem;
`;

 const ContinueShoppingButtonBase = styled(Button)({
    margin: "20px 1rem 20px 1rem",
    borderRadius: 5,
    padding: "10px 20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.08)",
    background:
         "linear-gradient(74deg, rgba(0, 0, 0, 0.78) 0%, #A30A00 96.88%)",
     color: "white",
     fontSize: "20px",
    
     "&:active": {
         transform: "scale(0.98)",
         boxShadow: "0 2px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        },
     });


const SignUpButton = styled(Button) ({
    margin: "20px 1rem 20px 1rem",
    borderRadius: 5,
     padding: "10px 20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.08)",
     background:
     "linear-gradient(74deg, rgba(0, 0, 0, 0.78) 0%, #A30A00 96.88%)",
    color: "white",
     fontSize: "20px",

 "&:active": {
     transform: "scale(0.98)",
     boxShadow: "0 2px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
    },
 });

 const ButtonsGrid = styled(Grid)`
    margin-top: 1rem;
`;

const StyledLink = styled(Link)`

  text-decoration: none;
`;


export {
    StyledContainer,
    StyledTypography,
    StyledPaper,
    ContinueShoppingButtonBase,
    SignUpButton,
    ButtonsGrid,
    StyledLink,
}
