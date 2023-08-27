import React from "react";
import { CategoryLink, ImageWrapper } from "../../OurService.styled";
import { ServiceMenuProps } from "../types";

const ServiceMenuComponent: React.FC<ServiceMenuProps> = ({
    categories,
    setSelectedCategory,
    selectedCategory,
}) => {
    return (
        <>
            {categories.map((category) => (
                <ImageWrapper
                    key={category.name}
                    active={selectedCategory === category.name}
                >
                    <img src={category.image} alt={category.name} />
                    <CategoryLink
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        {category.name} <span>&rarr;</span>
                    </CategoryLink>
                </ImageWrapper>
            ))}
        </>
    );
};

export default ServiceMenuComponent;
