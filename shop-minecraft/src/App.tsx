import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/theme";
import RouterConfig from "./service/routes";
import { CartProvider } from "./context/CartContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CartProvider>
                <BrowserRouter>
                    <RouterConfig />
                </BrowserRouter>
            </CartProvider>
        </ThemeProvider>
    );
}

export default App;
