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

 const ContinueShoppingButtonBase = styled(Button)`
    color: #1A1A1A;
    border-color: #1A1A1A;
    background-color: white;
    padding: 8px 24px;
`;


 const SignUpButton = styled(Button)`
    color: #1A1A1A;
    border-color: #1A1A1A;
    background-color: white;
    padding: 8px 24px;
`;

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
