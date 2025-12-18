import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const imgPath = `/images/products/${product.img}`;

    return (
        <div>
            <Link to={`/product/${product.id}`}>
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
                    <p className="text-gray-500 text-xs">
                        price {product.price}$
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
