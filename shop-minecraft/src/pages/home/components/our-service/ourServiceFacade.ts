import { useEffect, useState } from "react";

export const useOurServiceFacade = () => {
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("Privilege");
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

    return {
        categories,
        selectedCategory,
        setSelectedCategory,
        loading,
        error
    };
};
