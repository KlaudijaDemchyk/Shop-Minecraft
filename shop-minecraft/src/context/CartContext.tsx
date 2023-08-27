import React, { createContext, useContext, useState } from "react";
type CartProviderProps = {
    children: React.ReactNode;
};

interface CartItemType {
    name: string;
    price: number;
    image?: string;
}

interface CartContextType {
    cartItems: CartItemType[];
    addItemToCart: (item: CartItemType) => void;
    removeItemFromCart: (itemName: string) => void;
    itemsCount: number; // This will now be a derived value, not a state
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);

    const addItemToCart = (item: CartItemType) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeItemFromCart = (itemName: string) => {
        setCartItems((prevItems) =>
            prevItems.filter((i) => i.name !== itemName)
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItemFromCart,
                itemsCount: cartItems.length,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
