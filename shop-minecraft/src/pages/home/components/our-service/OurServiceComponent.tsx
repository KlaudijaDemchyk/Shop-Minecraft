import React from "react";
import { ServiceMenu, Title, Wrapper } from "./OurService.styled";
import ServiceMenuComponent from "./component/service-menu/ServiceMenuComponent";
import ServiceCardComponent from "./component/service-card/ServiceCardComponent";
import { useOurServiceFacade } from "./ourServiceFacade";

const OurServiceComponent: React.FC = () => {
    const {
        categories,
        selectedCategory,
        setSelectedCategory,
        loading,
        error,
    } = useOurServiceFacade();

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
