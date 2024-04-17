const { createContext, useState } = require("react");

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);
    const [role, setRole] = useState("")

    return (
        <CartContext.Provider value={{ cartCount, setCartCount, role, setRole }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;