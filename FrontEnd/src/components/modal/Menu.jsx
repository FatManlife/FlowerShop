import { useEffect, useState } from "react";
import { icons } from "../../constants/icons";
import { useAuth } from "../../services/AuthContext";
import { useFetchData } from "../../hooks/useFetchData";
import CartItemCard from "../card/CartItemCard";

const ShoppingCartSidebar = ({ isOpen, setIsOpen }) => {
    const { authId } = useAuth();
    const [refreshKey, setRefreshKey] = useState(0);
    const { data, error, loading } = useFetchData(
        `/cart/${authId}/item`,
        refreshKey
    );

    const subtotal = data?.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!isOpen) return null;

    return (
        <div className="min-h-screen bg-gray-100">
            {/*Cart Items*/}
            <div
                className={`border-black border fixed top-0 right-0 h-full w-full md:w-1/2 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-6 border-b">
                        <h2 className="text-lg font-medium">Shopping Cart</h2>
                        <button
                            onClick={() => setIsOpen()}
                            className="text-gray-600 hover:text-gray-800"
                            aria-label="Close"
                        >
                            <img
                                src={icons.close}
                                alt="close"
                                className="w-4 h-4"
                            />
                        </button>
                    </div>

                    {/* Cart Items */}

                    <div className="flex-1 overflow-y-auto py-4">
                        {data?.map((item) => (
                            <div key={item.id}>
                                <CartItemCard
                                    item={item}
                                    refresh={() =>
                                        setRefreshKey((prev) => prev + 1)
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {/* Subtotal Section */}
                    <div className="">
                        <div className="flex justify-between items-center border-b border-t py-8 px-10">
                            <span className="text-lg">Subtotal</span>
                            <span className="text-lg font-medium">
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>

                        {/* Gift Message Input */}
                        <textarea
                            placeholder="Gift Message"
                            className="w-full h-40 border-b px-4 py-2 text-sm  resize-none
               focus:outline-none focus:border-gray-400"
                        />

                        {/* Shipping Note */}
                        <p className="text-sm tex-black text-center py-15">
                            Shipping & taxes calculated at checkout
                            <br />
                            Free standard shipping within Kyiv
                        </p>

                        {/* Checkout Button */}
                        <button className="w-full bg-black text-white py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors">
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartSidebar;
