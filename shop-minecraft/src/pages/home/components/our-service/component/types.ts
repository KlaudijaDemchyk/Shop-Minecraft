type Product = {
    name: string;
    image: string;
    price: number;
};

type Category = {
    name: string;
    image: string;
    products: Product[];
};

type ServiceCardProps = {
    categories: Category[];
    selectedCategory: string | null;
};

type ServiceMenuProps = {
    categories: Category[];
    setSelectedCategory: (category: string) => void;
    selectedCategory: string | null;
};

export {
    Category,
    ServiceCardProps,
    ServiceMenuProps,
};
