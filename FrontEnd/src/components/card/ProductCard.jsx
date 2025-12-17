const ProductCard = ({ product, nr }) => {
    const imgPath = `/images/products/${product.img}`;

    return (
        <div>
            <div className="relative aspect-square">
                <img
                    src={imgPath}
                    alt={product.name}
                    className="w-full h-full bg-cover p-4"
                />
            </div>

            <div className="p-4 text-center">
                <h3 className="text-gray-800 text-sm font-medium mb-1">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-xs">price {product.price}$</p>
            </div>
        </div>
    );
};

export default ProductCard;
