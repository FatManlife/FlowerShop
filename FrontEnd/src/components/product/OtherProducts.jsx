import { useFetchData } from "../../hooks/useFetchData";
import ProductCard from "../card/ProductCard";

const OtherProducts = () => {
    const { data, error, loading } = useFetchData("/product/recommendation/4");

    if (loading)
        return (
            <div className="border-r border-l max-w-7xl p-8 text-center">
                Loading...
            </div>
        );
    if (error)
        return (
            <div className="border-r border-l max-w-7xl p-8 text-center text-red-500">
                Error: {error.message}
            </div>
        );

    return (
        <div className="grid grid-cols-4">
            {data.map((product, index) => (
                <div className={`${index < data.length - 1 ? "border-r" : ""}`}>
                    <ProductCard product={product} key={product.id} />
                </div>
            ))}
        </div>
    );
};

export default OtherProducts;
