import React from "react";
import { Route, Routes } from "react-router-dom";
import paths from "./paths";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about-us/AboutPage";
import CartPage from "../pages/cart/CartPage";
import LoginComponent from "../auth/login/LoginComponent";
import RegistrationComponent from "../auth/registration/RegistrationComponent";
import PaymentPage from "../pages/payment/PaymentPage";

const RouterConfig: React.FC = () => {
    return (
        <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.about} element={<AboutPage />} />
            <Route path={paths.cart} element={<CartPage />} />
            <Route path={paths.login} element={<LoginComponent />} />
            <Route path={paths.register} element={<RegistrationComponent />} />
            <Route path={paths.payment} element={<PaymentPage />} />
        </Routes>
    );
};

export default RouterConfig;
