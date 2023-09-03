import React from "react";
import Container from "./components/container/Container";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const HomePage: React.FC = () => {
    useDocumentTitle("Home Page");

    return (
        <Container>
            <></>
        </Container>
    );
};

export default HomePage;
