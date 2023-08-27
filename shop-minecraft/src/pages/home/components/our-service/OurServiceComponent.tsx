import React, { useState, useEffect } from "react";
import { ServiceMenu, Title, Wrapper } from "./OurService.styled";
import ServiceMenuComponent from "./component/service-menu/ServiceMenuComponent";
import ServiceCardComponent from "./component/service-card/ServiceCardComponent";

const OurServiceComponent: React.FC = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] =
        useState<string>("Privilege");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(
                    "There was a problem with the fetch operation:",
                    error.message
                );
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Wrapper>
            <Title variant="h2">Our Service</Title>
            <ServiceMenu>
                <ServiceMenuComponent
                    categories={categories}
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            </ServiceMenu>

            <ServiceCardComponent
                selectedCategory={selectedCategory}
                categories={categories}
            />
        </Wrapper>
    );
};

export default OurServiceComponent;
