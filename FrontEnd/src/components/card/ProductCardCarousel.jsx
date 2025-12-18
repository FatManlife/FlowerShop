import { Link } from "react-router-dom";

const ProductCardCarousel = ({ product }) => {
    return (
        <div className="shrink-0 w-24">
            <Link to={`/product/${product.id}`}>
                <img
                    src={`/images/products/${product.img}`}
                    alt={product.name}
                    className="border border-gray-200 w-full h-24 object-cover mb-2"
                />
                <p className="text-xs text-gray-800 text-center truncate">
                    {product.name}
                </p>
                <p className="text-xs text-gray-600 text-center">
                    ${product.price}
                </p>
            </Link>
        </div>
    );
};

export default ProductCardCarousel;
