import api from "../../api/api";

const CartItemCard = ({ item, refresh }) => {
    const handleRemove = async () => {
        try {
            await api.delete(`cart/${item.cart_id}/item/${item.product_id}`);
            console.log("Removing item:", item.product_id);
            refresh();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="flex gap-4 py-6 px-10 border-b border-black bg-white">
            {/* Product Image */}
            <div className="w-28 h-28 shrink-0 border border-gray-300">
                <img
                    src={"/images/products/" + item.img}
                    alt={item.name}
                    className="w-full h-full object-cover border-black"
                />
            </div>

            {/* Product Info */}
            <div className=" flex-1 justify-between">
                <div className="text-start flex flex-col h-full justify-center">
                    <h3 className="text-base font-normal mb-1">{item.name}</h3>
                    <p className="text-sm text-black">
                        Quantity ({item.quantity})
                    </p>
                    <p className="text-base font-normal mt-1">${item.price}</p>
                </div>
            </div>

            {/* Remove Button */}
            <div className="flex ">
                <button
                    onClick={handleRemove}
                    className="text-sm text-gray-600 hover:text-black text-center"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItemCard;
